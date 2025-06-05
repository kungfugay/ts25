/**
 * 기본 타입 간의 호환성 (캐스팅)
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅

/**
 * 객체 타입 간의 호환성
 * = 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

// 슈퍼
type Animal = {
    name: string;
    color: string;
}

// 서브
type Dog = {
    name: string;
    color: string;
    breed: string;  // Animal에서 추가됨 
}

let animal : Animal = {
    name: "기린",
    color: "yellow"
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}

animal = dog;
// dog = animal;    // 다운캐스팅 불가

// 슈퍼
type Book = {
    name: string;
    price: number;
}

// 서브
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "리액트",
    price: 33000,
    skill: "reactjs"
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */
// 객체를 정의할 때 객체 리터럴을 사용하면
let book2: Book = {
    name: "리액트",
    price: 33000,
    // skill: "reactjs"
}

let book3: Book = programmingBook;

function func(book: Book) {}
func({
    name: "리액트",
    price: 3000,
    //skill: "reactjs"
});
func(programmingBook);