// any
// 특정 변수의 타입을 우리가 확실히 모를 때 (범용적 사용)
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// 런타임에서 오류가 발생함

// unknown 타입
// 어떤 타입의 값이든 다 저장 가능
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;           // 오류 : unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없음
// unknownVar * 2;             // 오류 : 연산 참여 불가
// unknownVar.toUpperCase();   // 오류 : 메서드 사용 불가

// 타입 정제 하여 사용 가능
if (typeof unknownVar === "number") {
    num = unknownVar;
    num.toFixed();
}
