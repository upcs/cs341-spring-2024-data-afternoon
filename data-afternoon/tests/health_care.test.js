/*
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Mock jQuery's $.post method
$.post = jest.fn((url, callback) => {
  const mockCombinedResults = [
    [
      { name: 'Health Service A', location: 'Location A' },
      { name: 'Health Service B', location: 'Location B' }
    ], [], [], []
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

require('../public/javascripts/health_care.js');

describe('Health Care Services Data Processing', () => {
  test('Correctly fetches and displays health service data', () => {
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));
    expect(document.getElementById).toHaveBeenCalledWith("health-care");

    const mockElement = document.getElementById("health-care");
    expect(mockElement.innerHTML).toContain('<h1>Health Care Services</h1>');
    expect(mockElement.innerHTML).toContain('Health Service A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('Health Service B');
    expect(mockElement.innerHTML).toContain('Location B');
  });
});

