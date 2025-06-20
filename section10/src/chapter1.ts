/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]? : T[key];   // indexed access
};

// 일부분 프로퍼티만 넣어도 됨
const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안...",
}

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
    [key in keyof T]-? : T[key];
}

const withThumbnailPost : Required<Post> = {
    title : "한입 타스 후기",
    tags : ["ts"],
    content : "",
    thumbnailURL: ""
}

/**
 * Readonly<T>
 * -> 읽기 전용, 수정 불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
    readonly [key in keyof T] : T[key];
}

const readonlyPost : Readonly<Post> = {
    title : "보호된 게시글",
    tags: [],
    content: "",
}

// readonlyPost.content = "바보";  // 에러