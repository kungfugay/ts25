/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 */

class Employee {
    //필드
    // private name: string;   // default = "public"
    // protected age: number;
    // public position: string;

    // 생성자
    // 생성자에 접근제어자를 넣게 되면 필드를 자동으로 만들어줌 => 중복되므로 필드는 삭제
    constructor(private name:string, protected age:number, public position:string) {
        // this.name = name;
        // this.age = age;
        // this.position = position
    }

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name:string, age:number, position:string, officeNumber:number) {
        super(name, age, position);  // 부모 클래스의 constructor 호출 필수!
        this.officeNumber = officeNumber;
    }
    // 메서드
    func() {
        this.name;
        this.age;     // protected -> 파생클래스에서 접근 가능
    }
}

const employee =  new Employee("이정환", 27, "develper");
employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";