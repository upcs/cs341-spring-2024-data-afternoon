/*
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Mock jQuery's $.post method
$.post = jest.fn((url, callback) => {
  const mockCombinedResults = [
    [
      { name: 'Meal Spot A', location: 'Location A' },
      { name: 'Meal Spot B', location: 'Location B' }
    ], [], [], [], [], []
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById to target a specific DOM element
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

require('../public/javascripts/free_meals.js');

describe('Free Meals Data Processing', () => {
  test('fetches and displays meal data correctly', () => {
    // Verify that $.post was called with the correct arguments
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));

    // Check that the correct DOM element is targeted
    expect(document.getElementById).toHaveBeenCalledWith("free-meals");

    // Validate the innerHTML of the targeted element for correctness
    const mockElement = document.getElementById("free-meals");
    expect(mockElement.innerHTML).toContain('<h1>Free Meals</h1>');
    expect(mockElement.innerHTML).toContain('Meal Spot A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('Meal Spot B');
    expect(mockElement.innerHTML).toContain('Location B');
  });
});

