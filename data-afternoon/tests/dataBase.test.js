/**
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $; // Make sure jQuery is available globally

// Mocking the Google Maps API
class MockGoogleMaps {
  constructor() {
    this.setCenter = jest.fn();
    this.Marker = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
    }));
    this.InfoWindow = jest.fn();
    this.Map = jest.fn().mockImplementation(() => ({
      setCenter: jest.fn(),
    }));
    this.Size = jest.fn();
    this.Geocoder = jest.fn().mockImplementation(() => ({
      geocode: jest.fn((opts, callback) => {
        callback([{geometry: {location: 'mockLocation'}}], "OK");
      }),
    }));
  }
}
global.google = {
  maps: new MockGoogleMaps()
};

// Mocking the HTML structure as the script updates the DOM
document.body.innerHTML = `<div id="map"></div><div id="legend"></div>`;

// Mock response data for $.post
const mockData = [
  [
    {location: '123 Main St, Anytown, USA', name: 'Place 1'},
    {location: '456 Elm St, Yourtown, USA', name: 'Place 2'}
  ],
];

// Mocking jQuery's $.post method
$.post = jest.fn((url, callback) => {
    if (typeof callback === 'function') {
        callback(mockData, 'success');
    }
});

// Import the dataBase.js after setting up the mock
require('../public/javascripts/dataBase.js');

describe('Google Maps and Legend Population Test', () => {
    test('Markers are created and legend is populated based on mock data', () => {
        // Verify that Google Maps API was called correctly
        expect(google.maps.Geocoder).toHaveBeenCalled();
        expect(google.maps.Marker).toHaveBeenCalledTimes(mockData[0].length);

        // Check if the legend has been populated correctly
        const legendItems = document.getElementById('legend').children;
        expect(legendItems.length).toBeGreaterThan(0); // Expect at least one legend item
    });
});
