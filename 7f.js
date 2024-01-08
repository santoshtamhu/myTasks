function convertTemperature(degrees, unit) {
  let result = "";
  if (unit === "c") {
    result = (degrees * 9) / 5 + 32;
    return result + "f";
  } else if (unit === "f") {
    result = ((degrees - 32) * 5) / 9;
    return result + "c";
  }
}

console.log(convertTemperature(86, "f"));
