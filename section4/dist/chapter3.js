/**
 * 함수 오버로딩
 * js에서 불가, ts에서 가능
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */
// 실제 구현 부 -> 구현 시그니처
function func(a, b, c) {
    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
func(1); // Ver 1
func(1, 2, 3); // Ver 2
export {};
