/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;
type FuncB = () => number;


type ReturnType<T> = T extends () => infer R ? R: never;

type A = ReturnType<FuncA>;
// () => string 
// () => infer R
// 조건식을 참으로 만드는 R 타입을 찾아서 반환함

type B = ReturnType<FuncB>;

type C = ReturnType<number>;
// number
// () => any
// 조건식 추론 불가 -> 조건식 거짓으로 판단


/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R>? R: never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 추론해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string