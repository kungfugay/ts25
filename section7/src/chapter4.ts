/**
 * 제네릭 클래스
 */

class List<T> {
    constructor(private list:T[]){}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        this.list.pop();
    }

    print(){
        console.log(this.list);
    }
}

// 꼭 <T> 정의 안 해도 됨
const numberList = new List<number>([1,2,3]);
numberList.pop(); // 3 제거
numberList.push(4); // 4 추가
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("abc");
stringList.pop();
stringList.print();
