/**
 * 타입스크립트의 클래스
 */
const employee = {
    name: "이예진",
    age: 24,
    position: "developer",
    work() {
        console.log("일함");
    }
};
class Employee {
    //필드
    name; // 암시적 any (noImplicityAny : false)
    age;
    position;
    // 해결방법 1 변수명?
    // 해결방법 2 초기값 넣어두기
    // 해결방법 3 생성자 만들기
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일함");
    }
}
const employeeB = new Employee("이예진", 24, "개발자");
console.log(employeeB);
export {};
