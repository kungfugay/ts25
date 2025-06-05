/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// 파라미터, 리턴값을 묘사
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = "이예진", age, tall) {
    console.log(`name: ${name}`);
    if (typeof tall === 'number') {
        console.log(`tall: ${tall + 10}`); // type guard (not null 보장)
    }
}
introduce("이예진", 26, 158);
introduce("이예진", 26);
// rest인수 + 튜플 타입(길이, 타입 제한)
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => { sum += it; });
    return sum;
}
getSum(1, 2, 3);
;
6;
export {};
// getSum(1, 2, 3, 4, 5, 6) // 15
