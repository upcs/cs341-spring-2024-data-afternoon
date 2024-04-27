/*
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $;

// Mock jQuery's $.post method
$.post = jest.fn((url, callback) => {
  const mockCombinedResults = [
    [], [], [], [], [], [], // Adjust the index for health care services
    [
      { name: 'Health Service A', location: 'Location A', contact_info: '123-456-7890', service: 'General Practice' },
      { name: 'Health Service B', location: 'Location B', contact_info: '098-765-4321', service: 'Dental Care' }
    ]
  ];
  callback(mockCombinedResults, 'success');
});

// Mock document.getElementById to simulate DOM element retrieval
document.getElementById = jest.fn().mockReturnValue({
  innerHTML: ''
});

require('../public/javascripts/health_care.js');

describe('Health Care Services Data Processing', () => {
  test('fetches and displays health service data correctly', () => {
    // Ensure that $.post is called with the correct arguments
    expect($.post).toHaveBeenCalledWith("http://localhost:3000/", expect.any(Function));

    // Check if the script is targeting the correct DOM element
    expect(document.getElementById).toHaveBeenCalledWith("health-care");

    // Verify the innerHTML update of the targeted element matches expected content
    const mockElement = document.getElementById("health-care");
    expect(mockElement.innerHTML).toContain('<h1>Health Care Services</h1>');
    expect(mockElement.innerHTML).toContain('Health Service A');
    expect(mockElement.innerHTML).toContain('Location A');
    expect(mockElement.innerHTML).toContain('123-456-7890');
    expect(mockElement.innerHTML).toContain('General Practice');
    expect(mockElement.innerHTML).toContain('Health Service B');
    expect(mockElement.innerHTML).toContain('Location B');
    expect(mockElement.innerHTML).toContain('098-765-4321');
    expect(mockElement.innerHTML).toContain('Dental Care');
  });
});

