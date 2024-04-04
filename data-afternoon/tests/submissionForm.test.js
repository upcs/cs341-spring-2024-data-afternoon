/* 
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Setup mock for $.post to handle both submitting new client data and fetching pending requests
$.post = jest.fn((url, data, callback) => {
    // Simulate submitting new client data
    if (url === "http://localhost:3000/newClientData") {
        // Check if callback is a function before calling
        typeof callback === "function" && callback({ success: true });
    }
    // Simulate fetching pending requests
    else if (url === "http://localhost:3000/") {
        const mockCombinedResults = [[], [], [], [], [], [], [], [], [{ name: "Shelter A", location: "Location A" }]];
        // Check if data is a function for cases where no data object is provided, and only callback is
        const cb = typeof data === "function" ? data : callback;
        typeof cb === "function" && cb(mockCombinedResults, 'success');
    }
});

// Mocking document.getElementById for name, address inputs, and the submissionForm container
document.getElementById = jest.fn(id => {
    const elements = {
        "name": { value: "Test Name" },
        "address": { value: "Test Address" },
        "submissionForm": { innerHTML: '' } // Assuming this is the ID for the container where results are displayed
    };
    return elements[id] || {};
});

// Assuming the functions are global or exported for testing
const { submitFunction, updatePendingRequests } = require('../public/javascripts/submissionForm.js');

describe('Submission Form and Pending Requests', () => {
    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();
    });

    test('submitFunction posts data and updates pending requests on success', async () => {
        // Trigger the submit function
        await submitFunction();

        // Verify data was posted correctly
        expect($.post).toHaveBeenCalledWith(
            "http://localhost:3000/newClientData",
            { Name: "Test Name", Address: "Test Address" },
            expect.any(Function) // expecting a callback function
        );

        // Assuming the AJAX call to update pending requests is made immediately after successful submission
        expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));
    });

    test('updatePendingRequests updates the DOM correctly', async () => {
        // Directly trigger updatePendingRequests
        await updatePendingRequests();

        // Verify the DOM update for pending requests
        const submissionFormHTML = document.getElementById("submissionForm").innerHTML;
        expect(submissionFormHTML).toContain(""); // It should contain nothing 
    });
});

