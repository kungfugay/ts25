/**
 * 맵드 타입 (Mapped Type)
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    // key가 무엇이 될 수 있는지 정의,  // value가 어떤 값이 될 지
    // ? 추가 => mapped type이 정의하는 모든 프로퍼티가 선택적으로 변함
    [key in 'id' | 'name' | 'age']?: User[key];
}

// 연습
type BooleanUser = {
    [K in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}
//=================================================
// 한 명의 유저 정보를 불러오는 함수
function fetchUser(): ReadonlyUser {
  // ...기능
  return {
    id: 1,
    name: "이예진",
    age: 24,
  };   
}

const user = fetchUser();
// user.id = 2;


// 한 명의 유저 정보를 수정하는 함수
function updateUser(user: PartialUser) {
    // ... 수정하는 기능
}

// 변경할 값만 넘어가게 하고 싶다.
updateUser({
    age: 18,
})