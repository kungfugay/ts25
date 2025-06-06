/**
 * 타입스크립트의 클래스
 */

import { off } from "process";

const employee = {
    name: "이예진",
    age: 24,
    position: "developer",
    
    work() {
        console.log("일함")
    }
}

class Employee {
    //필드
    name: string;   // 암시적 any (noImplicityAny : false)
    age: number;
    position: string;

// 해결방법 1 변수명?
// 해결방법 2 초기값 넣어두기
// 해결방법 3 생성자 만들기

    // 생성자
    constructor(name:string, age:number, position:string) {
        this.name = name;
        this.age = age;
        this.position = position
    }

    // 메서드
    work() {
        console.log("일함")
    }
}

// 사용 예
const employeeB = new Employee("이예진", 24, "개발자");
console.log(employeeB);

// 클래스 자체가 타입으로도 쓰임
const employeeC: Employee = {
    name: "",
    age : 0,
    position: "",
    work(){}
}

// 확장 클래스
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name:string, age:number, position:string, officeNumber:number) {
        super(name, age, position);  // 부모 클래스의 constructor 호출 필수!
        this.officeNumber = officeNumber;
    }
}


