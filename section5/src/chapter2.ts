/**
 * 선언 합침
 * 인터페이스는 동일한 이름으로 중복 선언이 가능하고,
 * 사용할 때는 자동으로 모든 프로퍼티가 합쳐지게 된다.
 * 이때 프로퍼티 중복 선언은 같은 타입이 아니면 무조건 충돌 난다
 */

interface Person {
    name: string;
}

interface Person {
    // name: "string";
    age: number;
}

const person : Person = {
    name: "",
    age: 27
}

// 활용 예: 라이브러리 등 외부 모듈의 타입 정의 보강
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: number;
}

const lib = {
    a: 1,
    b: 2,
    c: 3     // 추가됨
}



