/**
 * 자바스크립트의 클래스
 */
let studentA = {
    name: "이정환",
    grade: "A+",
    study() {
        console.log("열시");
    },
    introduce() {
        console.log("안녕하세요");
    }
};
class Student {
    // 필드
    name;
    grade;
    age;
    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 메서드
    study() {
        console.log("열심히 공부함");
    }
    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
}
class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;
    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age); // 부모 클래스의 생성자가 호출된다.
        this.favoriteSkill = favoriteSkill;
    }
    // 메서드
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}
// 클래스를 이용해서 만든 객체 = 인스턴스
// Student 인스턴스
let studentB = new Student("이정환", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();
const studentDeveloper = new StudentDeveloper("이예진", "A+", 24, "Typescript");
console.log(studentDeveloper);
studentDeveloper.programming();
export {};
