var a = -10;
console.log("the numbers between the condition is");
while (a < 20) {
  console.log(a);
  a += 1;
}

var b = 10;
console.log("the even numbers between ");
while (b < 40) {
  console.log(b);
  b += 2;
}

var c = 300;
console.log("the odd numbers between ");
while (c <= 333) {
  if (c % 2 === 1) {
    console.log(c);
  }
  c++;
}

var d = 5;
console.log("the numbers between");
while (d < 51) {
  if ((d % 3 === 0) & (d % 5 === 0)) {
    console.log(d);
  }
  d++;
}
