
/* 
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Setup mock for $.post to handle both submitting new client data and fetching pending requests
$.post = jest.fn((url, data, callback) => {
    // Simulate submitting new client data
    if (url === "http://localhost:3000/newClientData") {
        typeof callback === "function" && callback({ success: true });
    }
    // Simulate fetching pending requests
    else if (url === "http://localhost:3000/") {
        const mockCombinedResults = [[], [], [], [], [], [], [], [], [{ name: "Shelter A", location: "Location A" }]];
        const cb = typeof data === "function" ? data : callback;
        typeof cb === "function" && cb(mockCombinedResults, 'success');
    }
    // Simulate the check-inappropriate endpoint
    else if (url.includes('check-inappropriate')) {
        callback(data.name === "Valid Name" && data.address === "Valid Address" ? { success: true } : { success: false, error: 'Invalid input' });
    }
});

// Mocking document.getElementById for input, button, and message display
document.getElementById = jest.fn(id => {
    const elements = {
        "name": { value: "Valid Name" },
        "address": { value: "Valid Address" },
        "submitButton": { disabled: false },
        "submissionForm": { innerHTML: '' },
        "messageDisplay": { innerHTML: '', style: { display: 'none', color: '' }, setInnerText: function(text) { this.innerHTML = text; this.style.display = 'block'; } }
    };
    return elements[id] || {};
});

// Mock localStorage
Storage.prototype.setItem = jest.fn();
Storage.prototype.getItem = jest.fn();
Storage.prototype.removeItem = jest.fn();

const { submitFunction } = require('../public/javascripts/submissionForm.js');

jest.useFakeTimers();

describe('Submission Form and Pending Requests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        
        // Reset the state of the DOM elements and mocks
        document.getElementById = jest.fn(id => {
            const elements = {
                "name": { value: "Valid Name" },
                "address": { value: "Valid Address" },
                "submitButton": { disabled: false },
                "submissionForm": { innerHTML: '' },
                "messageDisplay": { innerHTML: '', style: { display: 'none', color: '' }, setInnerText: function(text) { this.innerHTML = text; this.style.display = 'block'; } }
            };
            return elements[id] || {};
        });

        // Mock localStorage operations
        Storage.prototype.setItem = jest.fn();
        Storage.prototype.getItem = jest.fn();
        Storage.prototype.removeItem = jest.fn();

        // Setup $.post mock to handle all cases
        $.post.mockImplementation((url, data, callback) => {
            if (url === "http://localhost:3000/newClientData") {
                callback({ success: true });
            } else if (url.includes('check-inappropriate')) {
                callback({ success: true }); // Ensure this matches expected use in your function
            } else {
                const mockResults = [[], [], [], [], [], [], [], [], [{ name: "Shelter A", location: "Location A" }]];
                callback(mockResults, 'success'); // Simulate successful AJAX response
            }
        });
    });

    test('submitFunction posts data and updates pending requests on success', async () => {
        await submitFunction();

        expect($.post).toHaveBeenCalledWith(
            "http://localhost:3000/newClientData",
            { Name: "Valid Name", Address: "Valid Address" },
            expect.any(Function)
        );

        expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));
    });

    test('submitButton respects cooldown', async () => {
        const button = document.getElementById('submitButton');
        await submitFunction();
        expect(button.disabled).toBeTruthy(); // Check if the button gets disabled

        jest.advanceTimersByTime(86400000); // Move forward by 24 hours
        expect(button.disabled).toBeFalsy(); // Check if the button is re-enabled
    });

    jest.useFakeTimers();

    test('displays appropriate messages on submit', async () => {
        await submitFunction();

        const messageDisplay = document.getElementById('messageDisplay');
        expect(messageDisplay.innerHTML).toContain('Submission was successful!');
        expect(messageDisplay.style.color).toBe('green');

        // Fast-forward time to see the message reset
        jest.advanceTimersByTime(5000); // Assuming your success/error messages clear after 5 seconds
        expect(messageDisplay.style.display).toBe('none');
    });

   // test('updatePendingRequests updates the DOM correctly', async () => {
   //     await updatePendingRequests();

   //     const submissionFormHTML = document.getElementById("submissionForm").innerHTML;
   //     expect(submissionFormHTML).toContain("Shelter A"); 
   // });

});
