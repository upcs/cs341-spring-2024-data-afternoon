/*
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Mock jQuery's $.post method
$.post = jest.fn((url, callback) => {
  const mockCombinedResults = [
    [], [], [], [], [], // Ensure the index matches the one used in the script
    [
      { name: 'WiFi Spot A', location: 'Location A' },
      { name: 'WiFi Spot B', location: 'Location B' }
    ]
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

require('../public/javascripts/free_wifi.js');

describe('Free Wifi Data Processing', () => {
  test('fetches and displays WiFi data correctly', () => {
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));
    expect(document.getElementById).toHaveBeenCalledWith("free-wifi");

    const mockElement = document.getElementById("free-wifi");
    expect(mockElement.innerHTML).toContain('<h1>Free Wifi</h1>');
    expect(mockElement.innerHTML).toContain('WiFi Spot A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('WiFi Spot B');
    expect(mockElement.innerHTML).toContain('Location B');
  });
});

