// 원시 타입 5가지
// number
let num1: number = 123; // :... (타입 주석 annotation)

let num2: number = -123;
let num3 : number = 0.123;
let num4 : number = -0.123;
let num5 : number = Infinity;
let num6 : number = -Infinity;
let num7: number = NaN;

num1.toFixed();

// string
let str1:string = "hello";
let str2:string = `hello`;
let str3:string = 'hello';
let str4:string = `hello ${num1}`;

str1 = 123;
str1.toUpperCase();
str1.toFixed();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;


// ========================================
// strictNullCheck 
// let numA: number = null; 


