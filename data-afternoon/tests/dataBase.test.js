/**
 * @jest-environment jsdom
 */

const $ = require('jquery');
global.$ = $; // Ensure jQuery is available globally

// Enhanced Mocking for Google Maps API
class MockGoogleMaps {
  constructor() {
    this.setCenter = jest.fn();
    this.Marker = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      setPosition: jest.fn(),
      setMap: jest.fn(),
    }));
    this.InfoWindow = jest.fn();
    this.Map = jest.fn().mockImplementation(() => ({
      setCenter: jest.fn(),
      fitBounds: jest.fn(),
    }));
    this.Size = jest.fn();
    this.Geocoder = jest.fn().mockImplementation(() => ({
      geocode: jest.fn((opts, callback) => {
        callback([{geometry: {location: 'mockLocation'}}], "OK");
      }),
    }));
    this.event = {
      addListener: jest.fn(),
    };
    this.places = {
      SearchBox: jest.fn().mockImplementation(() => ({
        addListener: jest.fn(),
      })),
    };
    this.LatLngBounds = jest.fn().mockImplementation(() => ({
      union: jest.fn(),
      extend: jest.fn(),
    }));
  }
}
global.google = {
  maps: new MockGoogleMaps()
};

// Updating the Mocking HTML structure
document.body.innerHTML = `<div id="map"></div><div id="legend"></div><input id="pac-input" />`;

// Reflecting changes in mock data structure for more comprehensive testing
const mockData = [
  [{location: '123 Main St, Anytown, USA', name: 'Place 1'}],
];

// Mocking jQuery's $.post method
$.post = jest.fn().mockImplementation((url, callback) => {
  return new Promise(resolve => {
    const mockResponse = mockData; // Adjust as needed
    callback(mockResponse, 'success');
    resolve();
  });
});

// Importing the modified dataBase.js script
require('../public/javascripts/dataBase.js');

describe('Google Maps Integration and UI Enhancements Test', () => {
  test('Markers created, legend populated, and search functionality based on mock data', async () => {
    // Assuming initAutocomplete is exposed and can be called directly
    await window.initAutocomplete();

    // Ensure the Google Maps API was used as expected
    expect(google.maps.Geocoder).toHaveBeenCalled();
    expect(google.maps.Marker).toHaveBeenCalledTimes(mockData.flat().length); // Assuming flat structure for simplicity

    // Verify the legend has been updated correctly
    const legendItems = document.getElementById('legend').children;
    expect(legendItems.length).toBeGreaterThan(0); // Expect at least one item
  });
});
