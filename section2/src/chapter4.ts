// 타입 별칭 (타입을 변수 처럼 사용)
type User = {
    id: number;
    name: string;
    nickname: string,
    birth: string,
    bio: string,
    location: string
}

/*
function func() {
    type User = {}   // 스코프
}
*/

let user1: User = {
    id: 1,
    name: "yejin",
    nickname: "kungfugay",
    birth: "2000.12.23",
    bio: "안녕하세요",
    location: "서울시"
};

let user2: User = {
    id: 2,
    name: "lee",
    nickname: "kungfugay",
    birth: "2000.12.23",
    bio: "안녕하세요",
    location: "서울시"
};


//================================================
// 인덱스 시그니처
// 규칙으로 정의 
// Key -> String, Value -> String
type CountryCodes = {
    [key : string] : string;
}
let countryCodes: CountryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom: "uk"
}

// 연습
type CountryNumberCodes = {
    [key: string] : number;
    Korea: number;          // 필수적으로 가져야 할 프로퍼티 선언 가능
    // Korea: string;          // 여기서 타입이 달라지면 상위 조건에서 걸림 (같거나 호환 가능해야함)
}
let countryNumberCodes:CountryNumberCodes = {
    // Korea: 410,
    // UnitedState : 840,
    // UnitedKingdom: 826
    // 프로퍼티가 비어있으면 검사할 게 없어서 조건 제약 위반 아님.. 주의
    Korea: 123,
}

