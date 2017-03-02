
var test = require('../js/script.js');

describe("Power test", function() {
  it("Positive number", function() {
    var result;

    result = test.pow(2,3);

    expect(result).toBe(8);
  });

  it("Negative number", function() {

    var result;

    result = test.pow(-3,3);

    expect(result).toBe(-27);
  });

  it("Zero power", function() {

    var result;

    result = test.pow(5,0);

    expect(result).toBe(1);

  });

  it("Decimal number", function() {

    var result;

    result = test.pow(0.4,5);

    expect(result).toBe('Wrong number format');

  });
});
