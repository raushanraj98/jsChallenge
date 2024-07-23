function evorodd(n) {
  if (n % 2 == 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evorodd(10);

function square(n) {
  console.log(n * n);
}

square(10);

const max =  function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(10, 20));


const concat = function (a, b) {
  return a + " " + b;
}

console.log(concat('Hello', 'World'));


const sum = (a,b) => a+b;
console.log(sum(10,20));


const contains = (str, char) => str.includes(char);

console.log(contains('Hello', 'o'));


function product (a, b=5) {
  return a * b;
}

console.log(product(10));


function greet(name, age=18) {
  return `Hello ${name}, you are ${age} years old`;
}

console.log(greet('Raushan', 20))

function print(str) {
  console.log(str);
}

function hof(fn, num) {
  for (let i = 1; i<=num; i++) {
    fn(i);
  }
}

hof(print, 10);


function value(num) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  } else {
    return 'Zero';
  }
}


function result (str) {
  if (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')) {
    return 'Vowel';
  } else {
    return 'Consonant';
  }
}




function hof2(fn, fn2, num) {
  return fn2(fn(num));
}

console.log(hof2(value, result, 10));
