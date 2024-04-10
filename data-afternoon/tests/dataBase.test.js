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
    this.InfoWindow = jest.fn().mockImplementation(() => ({
      open: jest.fn(),
    }));
    this.Map = jest.fn().mockImplementation(() => ({
      setCenter: jest.fn(),
      fitBounds: jest.fn(),
    }));
    this.Size = jest.fn();
    this.Point = jest.fn();
    this.Geocoder = jest.fn().mockImplementation(() => ({
      geocode: jest.fn((opts, callback) => {
        if (opts.address === 'Nonexistent Address') {
          callback([], 'ZERO_RESULTS');
        } else {
          callback([{geometry: {location: 'mockLocation'}}], "OK");
        }
      }),
    }));
    this.event = {
      addListener: jest.fn(),
    };
    this.places = {
      SearchBox: jest.fn().mockImplementation(() => ({
        getPlaces: jest.fn(),
        addListener: jest.fn((event, handler) => handler()),
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

// Mock global alert function
global.alert = jest.fn();

// Mocking HTML structure required by dataBase.js
document.body.innerHTML = `
  <div id="map"></div>
  <div id="legend"></div>
  <input id="pac-input" />
  <input id="locationSearch" />
  <iframe id="iframe"></iframe>
`;

const mockData = [
  [{ location: '123 Main St, Anytown, USA', name: 'Place 1' }],
];

// Mock $.post to simulate AJAX call to server
$.post = jest.fn().mockImplementation((url, callback) => {
  callback(mockData, 'success');
});

// Assume dataBase.js exports its functions for testing or they are global
require('../public/javascripts/dataBase.js');

describe('Google Maps Integration and UI Enhancements Test Suite', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    
    // Setup default behavior for `getPlaces`
    google.maps.places.SearchBox.mockImplementation(() => ({
      getPlaces: jest.fn().mockReturnValue([]), // Default to empty array
      addListener: jest.fn(),
    }));
  });

  test('initAutocomplete: Successful Initialization and Markers Placement', async () => {
    // Mock getPlaces to return specific data for this test case
    google.maps.places.SearchBox.mockImplementation(() => ({
      getPlaces: jest.fn().mockReturnValue([
	{ geometry: {
            location: { lat: 45.521, lng: -122.677 },
            viewport: null,
          },
           name: 'Mock Coffee Shop',
        }]),
      addListener: jest.fn((event, handler) => {
        if (event === "places_changed") handler();
      }),
    }));    

    await window.initAutocomplete();
    expect(google.maps.Map).toHaveBeenCalled();
    expect(google.maps.Marker).toHaveBeenCalledTimes(2);
  });

  test('initAutocomplete: Handles Empty Data Gracefully', async () => {
    $.post.mockImplementationOnce((url, callback) => {
      callback([], 'success');
    });
    await window.initAutocomplete();
    expect(google.maps.Marker).not.toHaveBeenCalled();
  });

  test('Dynamic Legend Creation: Correctly Populates Legend Items', async () => {
    await window.initAutocomplete();
    const legendItems = document.getElementById('legend').children;
    expect(legendItems.length).toBeGreaterThan(0);
  });

  test('Search Box: Places Markers Based on Search Results', () => {
    // Set up the value to be returned by getPlaces
    const mockPlaces = [
      {
        geometry: {
          location: { lat: 45.521, lng: -122.677 },
          viewport: null,
        },
        name: 'Mock Coffee Shop',
      }
    ];

    // Explicitly mock getPlaces before calling initAutocomplete
    google.maps.places.SearchBox.mockImplementation(() => ({
      addListener: jest.fn((event, handler) => handler()),
      getPlaces: jest.fn().mockReturnValue(mockPlaces),
    }));

    document.getElementById('pac-input').value = 'Coffee Shop';
    window.initAutocomplete();

    // Assertion to ensure markers were created based on mockPlaces
    expect(google.maps.Marker).toHaveBeenCalledTimes(2);
  });

  test('Search Box: Handles No Search Results Gracefully', () => {
    document.getElementById('pac-input').value = 'Unknown Location';
    const searchBoxMock = new google.maps.places.SearchBox();
    searchBoxMock.getPlaces.mockReturnValue([]); // Already a mock function, just adjusting return value
    window.initAutocomplete();
    expect(google.maps.Marker).toHaveBeenCalledTimes(1);
  });

  test('Initialization with Invalid Data: Skips Marker Creation', async () => {
    $.post.mockImplementationOnce((url, callback) => {
      callback([null], 'success');
    });
    await window.initAutocomplete();
    expect(google.maps.Marker).not.toHaveBeenCalled();
  });

  // Additional test cases are needed to achieve 100% coverage
  // But, they will be added later for convenience
});
