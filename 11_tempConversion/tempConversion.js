const convertToCelsius = function(temperature) {
  // (x − 32) × ⁠5/9⁠ °C 
  return +((temperature - 32) * 5/9).toFixed(1);
};

const convertToFahrenheit = function(temperature) {
  // (x × ⁠9/5⁠ + 32) °F
  return +(temperature * 9/5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
