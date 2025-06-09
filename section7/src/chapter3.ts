/**
 * 제네릭 인터페이스
 */

// <K,V> = 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
interface KeyPair<K, V> {
    key: K,
    value : V
}

// 제네릭 인터페이스를 타입으로 사용할 때는 제네릭의 타입을 정의해줘야 함
let keyPair : KeyPair<string, number> = {
    key: "key",
    value: 0,
}

let keyPair2 : KeyPair<boolean, string[]>  = {
    key: true,
    value: ["1"],
}

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key:string]: number;
}

let numberMap1: NumberMap = {
    strKey : -1231,
    iamstring : 123123
}

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value"
}

let booleanMap: Map<boolean> = {
    key: true
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V
}

let stringMap2 : Map2<string> = {
    key: "hello"
}

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저 / 개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer",
    skill: string
}

interface User<T> {
    name: string;
    profile: T
}

// 제네릭 인터페이스를 이용하면 타입 좁히기가 필요 없어진다!
function goToSchool(user: User<Student>) {
    /*
    if (user.profile.type !== 'student') {
        console.log("잘못 오셨습니다.");
        return;
    }
    */
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); // 에러

const developerUser: User<Developer> = {
    name: "이예진",
    profile : {
        type: "developer",
        skill: "TypeScript"
    }
}

const studentUser: User<Student> = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "한국외대"
    }
}