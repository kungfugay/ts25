/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number? string : number;

// **(추가) 분산 방지 (유니온을 합집합으로)
// type StringNumberSwitch<T> = [T] extends [number]? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 업그레이드!
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> => string
// StringNumberSwitch<string> => number
// 분리된 두 결과를 union으로 묶어서 c는 number | string 이렇게 들어가게 된다.

let d : StringNumberSwitch<boolean | number | string>; // 분산 방지되면 -> 거짓 ->  number
// 1단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2단계
// number | 
// string | 
// number

// 결과 (중복 무시)
// number | string


/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string >; // 유니온타입, 스트링
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | never | boolean
// never는 공집합이기 때문에 number | boolean.

// 반대로 T만 뽑아내기
type Extract<T,U> = T extends U ? T: never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
// never | string | never
// string