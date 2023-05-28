function savingTheSumOfValues() {
  let sum = 0;

  return function (num) {
    sum += num;
    return sum;
  }
}

const sum = savingTheSumOfValues();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
