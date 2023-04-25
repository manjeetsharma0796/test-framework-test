const demo = require("../src/demo.js"); 
const testLibrary = require("../lib/testing.js");
const displayHeadline = testLibrary.displayHeadline;
const assertEquals = testLibrary.assertEquals;
const isEqual = testLibrary.isEqual;
const displaySummary = testLibrary.displaySummary;

const testCheckEquality = function() {
  const it = function(testName, testData) {
    assertEquals(testData.actual, testData.expected, testName);
  };

  displayHeadline("testCheckEquality");

  it("Should give true, as number provided is same", {
    actual: isEqual(3, 3),
    expected: true
  });

  it("Should give false, as number provided is not same", {
    actual: isEqual(3, 4),
    expected: false
  });

  it("Should give true, as text provided is same", {
    actual: isEqual("hi", "hi"),
    expected: true
  });

  it("Should give false, as text provided is not same", {
    actual: isEqual("hi", "h"),
    expected: false
  });

  it("Should give true, as array provided is same", {
    actual: isEqual([1], [1]),
    expected: true 
  });

  it("Should give true, as nested array provided is same", {
    actual: isEqual([[2]], [[2]]),
    expected: true 
  });
};

const test = function() {
  testCheckEquality();
};

test();
