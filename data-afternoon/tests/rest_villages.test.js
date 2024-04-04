/**
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;
// Mock for $.post
$.post = jest.fn((url, callback) => {
  // Simulate the response data structure
  const mockCombinedResults = [
    [], [], [
      {name: 'Village A', location: 'Location A'},
      {name: 'Village B', location: 'Location B'}
    ], []
  ];
  callback(mockCombinedResults, 'success');
});

// Mock for document.getElementById
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

// Import the script that will be tested
require('../public/javascripts/rest_villages.js');

describe('Safe Rest Villages Data Processing', () => {
  test('Correctly fetches and displays village data', () => {
    // Since $.post is called immediately upon loading the script, it's already been invoked due to the require statement

    // Check if $.post was called with the expected URL
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));

    // Verify the correct element is targeted for content update
    expect(document.getElementById).toHaveBeenCalledWith("rest-villages");

    // Check the generated HTML content
    const mockElement = document.getElementById("rest-villages");
    expect(mockElement.innerHTML).toContain('<h1>Safe Rest Villages</h1>');
    expect(mockElement.innerHTML).toContain('Village A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('Village B');
    expect(mockElement.innerHTML).toContain('Location B');
  });
});

