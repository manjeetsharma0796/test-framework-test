const demo = require("../src/demo.js"); 
const testLibrary = require("../lib/testing.js");
const displayHeadline = testLibrary.displayHeadline;
const assertEquals = testLibrary.assertEquals;
const equalityCheckBy = testLibrary.equalityCheckBy;
const displaySummary = testLibrary.displaySummary;

const testEqualityCheckBy = function() {
  const it = function(testName, testData) {
    assertEquals(testData.actual, testData.expected, testName);
  };

  displayHeadline("testEqualityCheckBy");

  it("Should give true, as number provided is same", {
    actual: equalityCheckBy(3, 3),
    expected: true
  });

  it("Should give false, as number provided is not same", {
    actual: equalityCheckBy(3, 4),
    expected: false
  });

  it("Should give true, as text provided is same", {
    actual: equalityCheckBy("hi", "hi"),
    expected: true
  });

  it("Should give false, as text provided is not same", {
    actual: equalityCheckBy("hi", "h"),
    expected: false
  });

  it("Should give true, as array provided is same", {
    actual: equalityCheckBy([1], [1]),
    expected: true 
  });

  it("Should give true, as nested array provided is same", {
    actual: equalityCheckBy([[2]], [[2]]),
    expected: true 
  });
};

const test = function() {
  testEqualityCheckBy();
};

test();
