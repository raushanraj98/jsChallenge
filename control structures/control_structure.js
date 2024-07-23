let num = 5;
if (num > 0) {
    console.log('+ve');
} else if (num < 0) {
    console.log('-ve');
} else {
    console.log('zero');
}

let age = 20;

if (age >= 18) {
    console.log('Eligible for voting');
}else {
    console.log('Not eligible for voting');
}

let a = 10;
let b = 20;
let c = 30;

if (a > b) {
  if (a > c ) {
    console.log('a is greatest');
  } else {
    console.log('c is greatest');
  }
}
  else {
    if (b > c) {
      console.log('b is greatest');
    } else {
      console.log('c is greatest');
    }
  }

  let day = 1;

  switch (day) {
    case  1:
      console.log('Monday');
    break;
    case 2:
      console.log('Tuesday');
    break;
    case 3:
      console.log('Wednesday');
    break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
    break;
    default:
    console.log('Invalid day');
      break;
  }

  let num1 = 10;

  num1 % 2 == 0 ? console.log('Even') : console.log('Odd');

  let year = 2022;

  if (year % 4 == 0){
    if (year % 100 == 0){
      if (year % 400 == 0){
        console.log('Leap year');
      } else {
        console.log('Not a leap year');
      }
    } else {
      console.log('Leap year');
    }
  } else {
    console.log('Not a leap year');
  }