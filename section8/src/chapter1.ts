/**
 * keyof 연산자
 * => 객체 타입과 함께 사용
 * => 어떤 객체 타입의 프로퍼티 key들을 모두 추출
 * => keyof 뒤에는 타입만 올 수 있다.
 */


interface Person {
    name: string;
    age: number;
}

// Person 객체와 그 프로퍼티 이름(key)를 주면 해당하는 값을 반환하는 함수
// key는 type만 받기 때문에 string literal로 하나하나 명시 => key: "{프로퍼티이름}" | "{프로퍼티이름}" | ...
// 이렇게 되면 재사용성 떨어짐. 그 대신 keyof 사용 => key: keyof {객체}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "이예진",
    age: 24
}

let name = getPropertyKey(person, "name"); // 이예진
console.log(`${name}`);