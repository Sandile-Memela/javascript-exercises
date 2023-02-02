// fahrenheit to celsius
const convertToCelsius = function(temperature) {
  return parseFloat(((parseInt(temperature) - 32) * (5/9)).toFixed(1)); 
};

// celsius to fahrenheit
const convertToFahrenheit = function(temperature) {
  return parseFloat((parseInt(temperature) * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
