function fizzBuzz(num) {
  if (Number(num)) {
    if (!(num % 5) && !(num % 3)) return "FizzBuzz";
    if (!(num % 5)) return "Buzz";
    if (!(num % 3)) return "Fizz";
  }
  return num;
}
for (let i = 0; i <= 100; i++) {
 console.log(`${i}: ${fizzBuzz(i)}`);
}