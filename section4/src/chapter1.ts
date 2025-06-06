/**
 * 함수 타입 표현식 (function type expression)
 */


// 화살표 함수를 만드는 것처럼 타입 정의가 가능함
type Operation = (a:number, b: number) => number;

const add:Operation      = (a,b) => a+b;
const sub:Operation      = (a,b) => a-b;
const multiply:Operation = (a,b) => a*b;
const divide:Operation   = (a,b) => a/b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 * 호출 시그니쳐는 함수 타입을 객체 타입 문법 안에 정의하여, 
 * 변수가 함수와 객체 속성을 동시에 가질 수 있는 하이브리드 타입을 만들 수 있게 해줘요.
 */

type Operation2 = {
    (a:number, b:number): number;
    name: string;
}

const add2:Operation2      = (a,b) => a+b;
const sub2:Operation2      = (a,b) => a-b;
const multiply2:Operation2 = (a,b) => a*b;
const divide2:Operation2   = (a,b) => a/b;

add2.name; // 하이브리드 타입 (함수를 객체처럼 씀)

