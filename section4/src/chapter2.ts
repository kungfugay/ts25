/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */


// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;  // number 
let b: B = () => 10;  // number literal 10

a = b; // ok: 업캐스팅
// b = a; // error:  다운캐스팅

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value:number) => void;
type D = (value:10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc; 
// Animal (슈퍼) <- Dog (서브) :: 업캐스팅 :: 불가
let testFunc = (animal:Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}

// Dog (서브) <- Animal (슈퍼) :: 다운캐스팅 :: 가능
dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
}

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;  // 할당하려는 매개변수의 개수가 더 적을 때만 가능, 타입이 같아야 함
// func2 = func1;

