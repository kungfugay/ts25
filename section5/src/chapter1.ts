/**
 * 인터페이스의 확장
 */

interface Animal {
    name: string;
    age: number;
}

// 중복된 프로퍼티 -> 하나의 슈퍼(super)로 상속 받자 
interface Dog extends Animal {
    // name: "hello"; // string literal type으로 재정의 가능 (원본 타입의 서브 타입만 가능)
    // age: number;
    isBark: boolean;
}

const dog: Dog = {
    name: "hello",
    age: 123,
    isBark: true
}

interface Cat {
    name: string;
    age: number;
    isScratch: boolean;
}


// 다중 확장도 가능하다.
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "",
    age: 123,
    isBark: true,
    isScratch: true
}
