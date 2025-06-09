// keyof와 typeof를 함께 쓸 수도 있다.

// interface를 명시하는 대신 이미 정의된 const 변수에서 type을 추출하는 방식
const person = {
    name: "이예진",
    age: 24
}

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}


let name = getPropertyKey(person, "name"); // 이예진
console.log(`${name}`);