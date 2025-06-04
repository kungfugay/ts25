// object 타입
// 이름을 기준으로 타입 정의 => 명목적 타입 시스템
/*
let user:object = {
    id: 1,
    name: "이예진"
}
*/
// user.id; // 객체긴한데, 그 다음은 몰라.
// 객체 리터럴 타입
// 객체의 프로퍼티를 기준으로, 즉 구조를 기준으로 타입을 정의 => 구조적 타입 시스템
// Property based system
let user = {
    id: 1,
    name: "Kungfugay"
};
user.id;
// 연습
let dog = {
    name: "돌돌이",
    color: "brown"
};
//===================================================
user = {
    name: "홍길동",
};
let config = {
    apiKey: "MY API KEY"
};
export {};
// config.apiKey = "hacked";
