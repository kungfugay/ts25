/**
 * 타입 단언 (assertion)
 */

type Person = {
    name: string;
    age:  number;
}

let person = {} as Person;  // as "Type" 으로 간주하라
person.name = "이정환";
person.age  = 27;

// 연습
type Dog = {
    name:  string;
    color: string;
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"  // breed가 추가되었는데도 에러가 나지 않음.
} as Dog;

//=======================================================================
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함.
 */

let num1 = 10 as never;   // never 는 모든 타입의 서브 타입
let num2 = 10 as unknown; // unknown 은 모든 타입의 슈퍼 타입 (전체 집합)

// let num3 = 10 as string;
let num3 = 10 as unknown as string;  // 다중단언 (비추천)

//=======================================================================
/**
 * const 단언
 */
let num4 = 10 as const;


// 객체에서 as const를 사용하게 되면
// 모든 프로퍼티 값이 readonly가 된다.
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// cat.name = '';

/**
 * Non Null 단언
 */

 type Post = {
    title: string;
    author?: string;
 };

 let post: Post = {
    title: "게시글1",
    author: "이예진"
 }

// 옵셔널 체이닝일 때 이 값이 null이 아닐 거라고 단언 author!
 const len : number = post.author!.length;