/*
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Mock jQuery's $.post method
$.post = jest.fn((url, callback) => {
  const mockCombinedResults = [
    [], [], [], [], [], [], [], // Adjust index based on script usage
    [
      { name: 'Volunteer Opportunity A', location: 'Location A', cause_area: 'Cause A', website_address: 'http://exampleA.com' },
      { name: 'Volunteer Opportunity B', location: 'Location B', cause_area: 'Cause B', website_address: 'http://exampleB.com' }
    ]
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById to simulate DOM element retrieval
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

require('../public/javascripts/volunteer.js');

describe('Volunteer Data Processing', () => {
  test('fetches and displays volunteer opportunities correctly', () => {
    // Since $.post is mocked to automatically invoke the callback with test data
    // Verify that $.post was called correctly
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));

    // Check if the script is targeting the correct DOM element
    expect(document.getElementById).toHaveBeenCalledWith("volunteer");

    // Verify the innerHTML update of the targeted element matches expected content
    const mockElement = document.getElementById("volunteer");
    expect(mockElement.innerHTML).toContain('<h1>Volunteer</h1>');
    expect(mockElement.innerHTML).toContain('Volunteer Opportunity A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('Cause A');
    expect(mockElement.innerHTML).toContain('http://exampleA.com');
    expect(mockElement.innerHTML).toContain('Volunteer Opportunity B');
    expect(mockElement.innerHTML).toContain('Location B');
    expect(mockElement.innerHTML).toContain('Cause B');
    expect(mockElement.innerHTML).toContain('http://exampleB.com');
  });
});

