/**
 * 사용자 정의 타입 가드
 */

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal:Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal:Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        animal;
    } else if ("isScratch" in animal) {

    }
}

//`매개변수명 is 타입`은 사용자 정의 타입 가드 문법이에요. 
// 이 함수가 `true`를 반환하면 TypeScript는 해당 매개변수가 지정된 타입임을 인지하고 타입 좁히기를 수행한답니다.