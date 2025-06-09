/**
 * 조건부 타입
 * => 제네릭과 함께 쓸 때 강력하다
 */

    // 넘버는 문자를 확장하지 않음.// 참      거짓
type A = number extends string? string : number; // A는 number

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

        // ObjA가 super 타입 (참)
type B = ObjB extends ObjA? number : string;


/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string: number;

let varA : StringNumberSwitch<number>
let varB : StringNumberSwitch<string>


// 조건에 따라 리턴타입을 조작 가능
// 오버로드 시그니처 활용
function removeSpaces<T>(text: T): T extends string? string: undefined;

// 오버로드 시그니쳐의 조건부 타입은 구현 시그니쳐 내부에서 추론이 가능
function removeSpaces(text: any) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
    
}

let result = removeSpaces("hi im kungfugay");
result.toUpperCase();

let result2 = removeSpaces(undefined);