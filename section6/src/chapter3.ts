/***
 * 인터페이스와 클래스
 */


interface CharacterInterface {
    name: string;
    moveSpeed : number;
    move(): void;
}


class Character implements CharacterInterface {
    
// 인터페이스는 무조건 public 필드만 정의할 수 있다.
// 상속받은 클래스에서도 접근 제어자를 따로 설정 불가
// 필요한 private 필드가 있다면 새로 정의 (extra)

    constructor(
        public name: string, 
        public moveSpeed: number, 
        private extra: string) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}