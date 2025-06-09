/**
 * 첫번째 사례
 */
// T -> string type
// U -> number type
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 2); // 구조분해할당
/**
 * 두번째 사례
 */
// 호출전에는 T를 unknown으로 추론
// 배열을 사용할 때는 T[]으로
// 첫번째 요소의 타입은 T, 나머지는 몰라도 돼.
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue([0, 1, 2]);
// 0
let str = returnFirstValue([1, "hello", "mynameis"]);
/**
 * 세번째 사례
 */
// T는 length라는 프로퍼티를 무조건 가지고 있어야 함
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
export {};
// let var4 = getLength(10); // 에러
