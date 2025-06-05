/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string;
    age:  number;
}


// value -> number: toFixed
// value -> string : toUpperCase
// value -> Date: getTime
// value -> Person: name은 age살 입니다.
function func(value:number | string | Date | null | Person) {

    // 이런 걸 type guard 라고 함
    if (typeof value === 'number') {
        console.log(value.toFixed());        // 이 안에서 value는 number
    }
    else if (typeof value === 'string') {
        console.log(value.toUpperCase());    // 이 안에서 value는 string
    }

    // 만약 (typeof value === 'object')를 쓰면 Date, null 둘 다 걸림
    // value.getTime()을 쓰면 오류가 나게 됨
    // 이런 경우 instanceof 를 쓴다.
    else if (value instanceof Date) {
        console.log(value.getTime());
    }

    // Date는 내장 클래스이지만 Person은 타입이다.
    // 이런 경우 in 을 쓴다.
    else if (value && 'age' in value) { // age 프로퍼티를 가진 건 Person 뿐
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }

}