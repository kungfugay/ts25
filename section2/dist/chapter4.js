/*
function func() {
    type User = {}   // 스코프
}
*/
let user1 = {
    id: 1,
    name: "yejin",
    nickname: "kungfugay",
    birth: "2000.12.23",
    bio: "안녕하세요",
    location: "서울시"
};
let user2 = {
    id: 2,
    name: "lee",
    nickname: "kungfugay",
    birth: "2000.12.23",
    bio: "안녕하세요",
    location: "서울시"
};
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: "uk"
};
let countryNumberCodes = {
    // Korea: 410,
    // UnitedState : 840,
    // UnitedKingdom: 826
    // 프로퍼티가 비어있으면 검사할 게 없어서 조건 제약 위반 아님.. 주의
    Korea: 123,
};
export {};
