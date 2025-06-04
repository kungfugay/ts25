// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
/*
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}
*/

// javascript의 객체로 변환됨 (컴파일 결과 사라지지 않는다!)
// 값을 사용하듯이 사용 가능!

enum Role {
    ADMIN,          // 타입스크립트의 enum은 숫자를 직접 할당하지 않아도 자동으로 처음부터 0, 1, ... 숫자가 할당된다.
    USER  = 10,     // 중간부터 할당도 된다 (숫자형 enum)
    GUEST
}

enum Language {
    korean = "ko",
    english = "en"
}

const user1 = {
    name: "이정환",
    role : Role.ADMIN,
    language : Language.korean
}

const user2 = {
    name: "홍길동",
    role : Role.USER
}
const user3 = {
    name: "이재명",
    role : Role.GUEST
}

console.log(user1, user2, user3);