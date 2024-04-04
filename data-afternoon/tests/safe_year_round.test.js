/**
 * @jest-environment jsdom
 */

// Mock jQuery's $.post method
const $ = require('jquery');
global.$ = $;
$.post = jest.fn((url, callback) => {
  // Mock the response data
  const mockCombinedResults = [
    [], [], [], [], [
      {name: 'Shelter A', location: 'Location A'},
      {name: 'Shelter B', location: 'Location B'}
    ]
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById to return a mock element where innerHTML can be set
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

// Import the script under test
require('../public/javascripts/safe_year_round.js');

describe('Safe Year Round Shelters Data Processing', () => {
  test('Correctly fetches and displays shelter data', () => {
    // The $.post call is made when the script is loaded, which is mocked above
    
    // Verify $.post was called correctly
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));

    // Verify document.getElementById was called with the correct ID
    expect(document.getElementById).toHaveBeenCalledWith("year-round-shelters");

    // Verify the innerHTML of the mock element was set correctly
    const mockElement = document.getElementById("year-round-shelters");
    expect(mockElement.innerHTML).toContain('<h1>Safe Year Round Shelters</h1>');
    expect(mockElement.innerHTML).toContain('Shelter A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('Shelter B');
    expect(mockElement.innerHTML).toContain('Location B');
  });
});

