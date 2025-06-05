/**
 * 타입 추론
 */

let a = 10;         // 자동으로 타입을 추론
let b = "hello";    // 변수의 초기값을 기준으로 타입을 추론한다.
let c = {
    id: 1,
    name: "이예진",
    profile: {
        nickname: "kungfugay"
    },
    urls: ["https://github.com/kungfugay"],
};

// 객체를 구조 분해 할당 해도 잘 된다.
let {id, name, profile, urls} = c;

let [one, two, three] = [1, "hello", true];

// 기본값이 설정된 파라미터 -> 추론 가능
function func(message = "hello") {
    return "hello";
}

//==========================================

let d;              // 기본값이 할당이 안되면 '암묵적' any 타입
d = 10;             // 여기서 number 타입으로 추론이 됨
d.toFixed();

d = "hello";        // 여기서 string 타입으로 추론이 됨
d.toUpperCase();    


//===========================================
let num10 = 10;        // number type
const num_10 = 10;     // number literal type 10

const str = "hello";

let arr = [1, "string"];