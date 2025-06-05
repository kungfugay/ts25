/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
let a = () => 10; // number 
let b = () => 10; // number literal 10
a = b; // ok: 업캐스팅
let c = (value) => { };
let d = (value) => { };
// c = d;
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc = dogFunc; 
// Animal (슈퍼) <- Dog (서브) :: 업캐스팅 :: 불가
let testFunc = (animal) => {
    console.log(animal.name);
    // console.log(animal.color);
};
// Dog (서브) <- Animal (슈퍼) :: 다운캐스팅 :: 가능
dogFunc = animalFunc;
let testFunc2 = (dog) => {
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2; // 할당하려는 매개변수의 개수가 더 적을 때만 가능, 타입이 같아야 함
export {};
// func2 = func1;
