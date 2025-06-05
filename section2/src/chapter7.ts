// void -> 텅 빈 -> 아무것도 없음.

// 반환 값을 지정 가능 :string
function func1():string {
    return "hello";
}

function func2():void {
    console.log("hello");
}

// null => return null
// undefined => return undefined

// never
// never -> 존재하지 않는 불가능한 타입
function func3(): never {
    while (true) {}
}

function func4() {
    throw new Error();
}

let anyVar: any;

let a: never;
// a = 1;
// a = {};
// a = "";
// a = anyVar;


