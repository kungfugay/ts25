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
let user: {
    id?: number;   // 선택적 프로퍼티(optional) : 만약 있어도 되고, 없어도 되고 => 변수명 뒤에 ? 추간
    name: string;
} = {
    id: 1,
    name: "Kungfugay"
};

user.id;


// 연습
let dog:{
    name: String;
    color: String;
} = {
    name: "돌돌이",
    color: "brown"
}

//===================================================
user = {
    name: "홍길동",
};


let config : {
    readonly apiKey: string;  // 읽기 전용 프로퍼티 (readonly)
} = {
    apiKey: "MY API KEY"
}

config.apiKey = "hacked";