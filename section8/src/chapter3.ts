/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | "black" | "green";

type Animal = "dog" | "cat" | "chicken";


// 조합 가능한 모든 타입이 유니온으로 할당됨
type ColoredAnimal = `${Color}-${Animal}`;