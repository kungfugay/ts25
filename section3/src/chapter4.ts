/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어 낸 타입
 * -> 합집합 타입, 교집합 타입이 존재
 */


/**
 * 1. 합집합 (Union) 타입
 */

let a: string | number | boolean | undefined | null;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true, "bye"];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

// 타입 별칭으로도 유니온 타입을 만들 수 있다.
type Union1 = Dog | Person;

// Dog 타입
let union1 : Union1 = {
    name: "",
    color: "",
};

// Person 타입
let union2 : Union1 = {
    name: "",
    language: ""
};

// Dog | Person 타입
let union3 : Union1 = {
    name: "",
    color: "",
    language: ""
};

// 에러: 합집합 바깥에 있음.
// let union4 : Union1 = {
//     name: ""
// }


/**
 * 2. 교집합 타입 - Intersaction 타입
 */

let variable: number & string;   // 기본 타입을 이용해서 교집합을 만들면 never

type Intersaction = Dog & Person;

// 모든 프로퍼티를 가져야 함
let intersaction1 : Intersaction = {
    name: "",
    color: "",
    language: ""
}
