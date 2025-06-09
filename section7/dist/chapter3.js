/**
 * 제네릭 인터페이스
 */
// 제네릭 인터페이스를 타입으로 사용할 때는 제네릭의 타입을 정의해줘야 함
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    strKey: -1231,
    iamstring: 123123
};
let stringMap = {
    key: "value"
};
let booleanMap = {
    key: true
};
let stringMap2 = {
    key: "hello"
};
// 제네릭 인터페이스를 이용하면 타입 좁히기가 필요 없어진다!
function goToSchool(user) {
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
const developerUser = {
    name: "이예진",
    profile: {
        type: "developer",
        skill: "TypeScript"
    }
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "한국외대"
    }
};
export {};
