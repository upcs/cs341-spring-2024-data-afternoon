/**
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $; // Make sure jQuery is available globally

// Mocking the HTML structure as your script seems to update the DOM
document.body.innerHTML = `<div id="getDataBase"></div>`;

// Mocking jQuery's $.post method
$.post = jest.fn((url, callback) => {
    const mockResponseData = "Mock response data"; // Define the mock response data
    // Ensure the callback is called correctly with the mock response and a mock status
    if (typeof callback === 'function') {
        callback(mockResponseData, 'success');
    }
});

// Import the dataBase.js after setting up the mock
require('../public/javascripts/dataBase.js'); // Adjust the path as necessary

describe('AJAX request test', () => {
    test('$.post updates #getDataBase with response data', () => {
        // Check if $.post was called with the expected URL
        expect($.post).toHaveBeenCalledWith(expect.any(String), expect.any(Function));

        // Verify the DOM was updated with the mock response data
        expect(document.getElementById("getDataBase").innerHTML).toBe('Mock response data');
    });
});

