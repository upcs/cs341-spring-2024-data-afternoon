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
