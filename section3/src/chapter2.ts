/**
 * Unknown 타입
 */

function unknownExam() {
    // 업캐스팅 (가능)
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    // 다운 캐스팅 (불가)
    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅 (never 타입은 모든 타입의 sub 타입)
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운 캐스팅 (불가)
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        return undefined; // 업캐스팅
    }

    let voidVar: void = undefined;
}

/**
 * any 타입 (모든 타입의 서브이자 슈퍼 타입; 치트키)
 */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // neverVar = anyVar;  // never타입은 순수한 공집합이므로 any 할당 불가
}

