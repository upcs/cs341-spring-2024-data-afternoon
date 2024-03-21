/**
 * @jest-environment jsdom
 */

const {
  mydataFunction,
  addInfoMap,
  changeAddInfoBack,
  handleSearch,
  toggleLanguage // Make sure to destructure this function from the module
} = require('../public/javascripts/unhoused.js');

jest.mock('../public/javascripts/unhoused.js', () => ({
  ...jest.requireActual('../public/javascripts/unhoused.js'), // This line ensures other functions are not mocked
  updateUserInterface: jest.fn(),
  getZipCode: jest.fn((lat, long, callback) => callback('12345')) // Mock implementation
}));

describe('Alert message test', () => {
  it('should display correct alert message', () => {
    // Mock the alert function
    global.alert = jest.fn();

    // Assuming mydataFunction triggers an alert
    mydataFunction();

    // Check if the alert was called
    expect(global.alert).toHaveBeenCalled();
  });
});

//-- Test functions for Sprint 2 --//

// Test for addInfoMap fn
describe('addInfoMap function', () => {
  it('should hide the dropdown and show the key', () => {
    document.body.innerHTML = `
      <div id="DropDown" style="display: block;"></div>
      <div id="key" style="display: none;"></div>
    `;

    require('../public/javascripts/unhoused.js').addInfoMap();

    expect(document.getElementById('DropDown').style.display).toBe('none');
    expect(document.getElementById('key').style.display).toBe('block');
  });
});

// Test for changeAddInfoBack fn
describe('changeAddInfoBack function', () => {
  it('should show the dropdown and hide the key', () => {
    document.body.innerHTML = `
      <div id="DropDown" style="display: none;"></div>
      <div id="key" style="display: block;"></div>
    `;

    require('../public/javascripts/unhoused.js').changeAddInfoBack();

    expect(document.getElementById('DropDown').style.display).toBe('block');
    expect(document.getElementById('key').style.display).toBe('none');
  });
});

// Test for handleSearch fn
describe('handleSearch function', () => {
  it('should change the iframe src based on the search input', () => {
    document.body.innerHTML = `
      <input id="searchInput" value="map" />
      <iframe id="iframe"></iframe>
    `;

    require('../public/javascripts/unhoused.js').handleSearch();

    expect(document.getElementById('iframe').src).toContain('google.com/maps');
  });

  it('should alert "Page not found." for invalid search input', () => {
    document.body.innerHTML = `<input id="searchInput" value="invalid" />`;
    global.alert = jest.fn();

    require('../public/javascripts/unhoused.js').handleSearch();

    expect(global.alert).toHaveBeenCalledWith('Page not found.');
  });
});

//-- Test functions for Sprint 3 --//

// Test for toggleLanguage
describe('toggleLanguage function', () => {
  beforeEach(() => {
    // Reset DOM and localStorage before each test
    document.body.innerHTML = '';
    localStorage.clear();
  });

  it('should toggle language to Spanish and update localStorage', () => {
    document.body.innerHTML = `
      <div class="en-tab" style="display: block;"></div>
      <div class="es-tab" style="display: none;"></div>
    `;

    toggleLanguage('es');

    expect(document.querySelector('.en-tab').style.display).toBe('none');
    expect(document.querySelector('.es-tab').style.display).toBe('block');
    expect(localStorage.getItem('selectedLanguage')).toBe('es');
  });

  // Additional test for toggling back to English...
});

// Test for Geolocation functionality NOT FINISHED/WORK-IN-PROGRESS
//describe('Geolocation functionality', () => {
  // Mock navigator.geolocation before importing unhoused.js
//  beforeAll(() => {
//    global.navigator = {
//      geolocation: {
//        getCurrentPosition: jest.fn().mockImplementationOnce((success) => success({
//          coords: {
//            latitude: 35.6895,
//            longitude: 139.6917,
//          },
//        })),
//      },
//    };
//  });

//  it('should update user interface with zip code', async () => {
    // Clear previous innerHTML and setup the environment for the test
//    document.body.innerHTML = '<div id="user-location"></div>';

    // Dynamically import the unhoused.js module
//    const { updateUserInterface, getZipCode } = await import('../public/javascripts/unhoused.js');

    // Perform the assertion to check if the UI was updated with the zip code
    //expect(document.getElementById('user-location').textContent).toContain('Zip Code: 12345');

//    expect(updateUserInterface).toHaveBeenCalledWith(35.6895, 139.6917);
//    expect(getZipCode).toHaveBeenCalled();
//  });

  // Reset mocks and any global changes to avoid leakage between tests
//  afterEach(() => {
//    jest.resetModules();
//    jest.clearAllMocks();
//    delete global.navigator;
//  });
//});

