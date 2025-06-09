/**
 * 제네릭 클래스
 */
class NumberList {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
const numberList = new NumberList([1, 2, 3]);
numberList.pop(); // 3 제거
numberList.push(4); // 4 추가
numberList.print();
export {};
