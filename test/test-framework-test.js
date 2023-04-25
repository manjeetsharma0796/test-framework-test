const demo = require("../src/demo.js"); 
const testLibrary = require("../lib/testing.js");
const displayHeadline = testLibrary.displayHeadline;
const assertDatatype = testLibrary.assertDatatype;
const displaySummary = testLibrary.displaySummary;

const testAssertDatatype = function() {
  const it = function(testName, testData) {
    assertDatatype(testData.actual, testData.expected, testName);
  };

  displayHeadline("testAssertDatatype");

  it("Should give true, as number provided is same", {
    actual: 3,
    expected: 3
  });

  it("Should give true, as text provided is same", {
    actual: "hi",
    expected: "hi"
  });

  it("Should give true, as array provided is same", {
    actual: [1],
    expected: [1]
  });
};

const test = function() {
  testAssertDatatype();
};

test();
