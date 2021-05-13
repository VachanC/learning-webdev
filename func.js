function iseven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function factorial(number) {
  var result = 1;
  for (var i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

function kebabToSnake(string) {
  var newstring = string.replace(/-/g, "_");
  return newstring;
}
