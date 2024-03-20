/**
 * @jest-environment jsdom
 */

//-- Test functions for Sprint 1 --//
const { mydataFunction } = require('../public/javascripts/unhoused.js');

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

    expect(document.getElementById('iframe').src).toContain('http://localhost/map.html');
  });

  it('should alert "Page not found." for invalid search input', () => {
    document.body.innerHTML = `<input id="searchInput" value="invalid" />`;
    global.alert = jest.fn();

    require('../public/javascripts/unhoused.js').handleSearch();

    expect(global.alert).toHaveBeenCalledWith('Page not found.');
  });
});
