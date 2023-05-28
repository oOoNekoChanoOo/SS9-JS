let number = +prompt("Nhập số có ba chữ số:");
let num1 = Math.floor(number / 100);
let num2 = Math.floor((number % 100) / 10); 
let num3 = number % 10; 
let reversedNumber = num3 * 100 + num2 * 10 + num1;

