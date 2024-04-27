/* 
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Mock jQuery's $.post method
$.post = jest.fn((url, callback) => {
  const mockCombinedResults = [
    [], [], [], // Index 3 is for free produce, according to the script
    [
      { name: 'Produce Stand A', location: 'Location A' },
      { name: 'Produce Stand B', location: 'Location B' }
    ], []
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById to return an object where we can check innerHTML later
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

require('../public/javascripts/free_produce.js');

describe('Free Produce Data Processing', () => {
  test('fetches and displays produce data correctly', () => {
    // Verify $.post was called correctly
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));

    // Check if the correct DOM element is targeted for the update
    expect(document.getElementById).toHaveBeenCalledWith("free-produce");

    // Verify the DOM element's innerHTML is updated correctly based on mock data
    const mockElement = document.getElementById("free-produce");
    expect(mockElement.innerHTML).toContain('<h1>Free Produce</h1>');
    expect(mockElement.innerHTML).toContain('Produce Stand A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('Produce Stand B');
    expect(mockElement.innerHTML).toContain('Location B');
  });
});

