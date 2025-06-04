// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
/*
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "이정환",
    // role: 0  // 0 <- 관리자
    role: Role.ADMIN
};
const user2 = {
    name: "홍길동",
    role: Role.USER
};
const user3 = {
    name: "이재명",
    role: Role.GUEST
};
console.log(user1, user2, user3);
export {};
