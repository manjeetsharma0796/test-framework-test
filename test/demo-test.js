const main = require("../src/demo.js")
const test = require("../lib/testing.js");

const demoTest = function() {
  test.displayHeadline("demoTest");
  test.assertEquals(main.functionName(false), true, "Should fail");
  test.assertEquals(main.functionName(true), false, "Should pass");
}
demoTest();
