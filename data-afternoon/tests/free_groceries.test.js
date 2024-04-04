/*
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Mock jQuery's $.post method
$.post = jest.fn((url, callback) => {
  const mockCombinedResults = [
    [], 
    [
      { name: 'Grocery Spot A', location: 'Location A' },
      { name: 'Grocery Spot B', location: 'Location B' }
    ], [], [], [], []
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById to simulate DOM element retrieval
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

require('../public/javascripts/free_groceries.js');

describe('Free Groceries Data Processing', () => {
  test('fetches and displays grocery data correctly', () => {
    // Ensure that $.post is called with the expected URL and callback
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));

    // Check if the script is targeting the correct DOM element
    expect(document.getElementById).toHaveBeenCalledWith("free-groceries");

    // Verify the innerHTML update of the targeted element matches expected content
    const mockElement = document.getElementById("free-groceries");
    expect(mockElement.innerHTML).toContain('<h1>Free Groceries</h1>');
    expect(mockElement.innerHTML).toContain('Grocery Spot A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('Grocery Spot B');
    expect(mockElement.innerHTML).toContain('Location B');
  });
});

