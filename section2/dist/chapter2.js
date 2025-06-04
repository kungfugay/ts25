// 배열
let numArr = [1, 2, 3]; // 1번 방식
let strArr = ["hello", "im", "kungfugay"];
let boolArr = [true, false, true]; // 2번 방식 (제네릭 문법 사용)
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// let multiArr: (string | number)[] 유니온 타입으로 추론
// 다차운 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1,2,3];
// tup1 = ["1", "2"];
let tup2 = [1, "2", true];
// push, pop을 하면 배열로 생각해서 길이를 추적하는 게 불가능.. 주의
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
const users = [
    ["이예진", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"]
];
export {};
