// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ assertion Passed");
  } else if (actual !== expected) {
    console.log("🛑 assertion failed");
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
