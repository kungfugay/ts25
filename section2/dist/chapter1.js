// 원시 타입 5가지
// number
let num1 = 123; // :... (타입 주석 annotation)
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
num1.toFixed();
// string
let str1 = "hello";
let str2 = `hello`;
let str3 = 'hello';
let str4 = `hello ${num1}`;
//str1 = 123;
str1.toUpperCase();
//str1.toFixed();
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// ========================================
// strictNullCheck 
// let numA: number = null; 
// ========================================
// 리터럴 타입 : 원시 타입 중의 하나로 타입을 지정할 수 있고,
// 다른 값을 넣으면 오류가 발생함.
let numA = 10;
//numA = 12;
numA = 10;
let strA = "hello";
export {};
//let boolA: true = false;
