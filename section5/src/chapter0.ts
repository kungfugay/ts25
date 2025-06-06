/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    // sayHi : () => void;
    sayHi(): void; // 호출 시그니처 방식
    sayHi(a:number, b:number): void; // 오버로드
}

type Func = {
    (): void;
}
const func: Func = () => {}

const person: Person = {
    name: "이정환",
    age: 27,
    sayHi: function(){
        console.log("Hi")
    }
}

// person.name = "홍길동";  // 에러: 읽기 전용