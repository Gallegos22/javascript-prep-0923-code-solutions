function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const sum = addTwoNumbers(4, 4);
console.log('addTwoNumbersResult', sum);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}

const minutes = convertHoursToMinutes(2);
console.log('miutes', minutes);

function getGreeting(name) {
  const result = 'Hello' + name + '!';
  return result;
}

const greeting = getGreeting(' World');
console.log('greeting;', greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}

const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}

const productDivideByFive = multiplyAndDivideBy5(35, 10);
console.log('productDivideByFive:', productDivideByFive);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}

const difference = subtractTwoNumbers(22, 7);
console.log('difference', difference);

function getCircleCircumference(radius) {
  const result = 2 * Math.PI * radius;
  return result;
}

const circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}

const fullName = getFullName('Juan', 'Ramirez');
console.log('fullName:', fullName);

function cube(number) {
  const result = number * number * number;
  return result;
}

const cubed = cube(5);
console.log('cubed:', cubed);
