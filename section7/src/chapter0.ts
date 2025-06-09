/**
 * 제네릭 (일반적인, 포괄적인)
 */

// 제네릭 함수
// T는 타입 변수
function func<T>(value:T):T {
    return value;
}

// value를 any로 정의하면, num, bool, str이 모두 any로 됨 (return 값을 기준으로 추론됨)
    // 잘못된 메서드를 써도 오류 감지 안됨
let num = func(10);
// num.toUpperCase();

// unknown으로 정의하면, return이 unknown
    // 타입 좁히기 (if typeof 를 사용해야만 메서드 사용 가능..)
if (typeof num === "number") {
    num.toFixed();
}

// 제네릭 타입 T를 사용하면 잘 추론이 된다!!

let bool = func(true);
let str = func("string");


// let arr = func([1,2,3] as [number, number, number]); // 방식 1: 타입 단언
let arr = func<[number, number, number]>([1,2,3]);      // 방식 2: <T>에 타입 정의
