const demo = require("../src/demo.js"); 
const testLibrary = require("../lib/testing.js");
const displayHeadline = testLibrary.displayHeadline;
const assertEquals = testLibrary.assertEquals;
const isEqualsTo = testLibrary.isEqualsTo;
const areEquals = testLibrary.areEquals;
const displaySummary = testLibrary.displaySummary;

const testAreEquals = function() {
  const it = function(testName, testData) {
    assertEquals(testData.actual, testData.expected, testName);
  };

  displayHeadline("testAreEquals");

  it("Should give true, as number provided is same", {
    actual: areEquals(3, 3),
    expected: true
  });

  it("Should give true, as text provided is same", {
    actual: areEquals("hi", "hi"),
    expected: true
  });

  it("Should give false, as text provided is not same", {
    actual: areEquals("hi", "h"),
    expected: false
  });

  it("Should give true, as array provided is same", {
    actual: areEquals([1], [1]),
    expected: true 
  });

  it("Should give true, as nested array provided is same", {
    actual: areEquals([[2]], [[2]]),
    expected: true 
  });
};

const test = function() {
  testAreEquals();
};

test();
