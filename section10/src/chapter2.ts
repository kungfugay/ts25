/**
 * Pick<T,K>
 * -> 두 개의 타입 인수 필요
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// K 타입 변수에 제약 조건을 넣어줘야 함
type Pick<T,K extends keyof T> = {
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    [key in K] : T[key];
}

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠"
}

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
    content: "",
    tags: [],
    thumbnailURL: ""
}


/**
 * Record<K, V>
 */

type ThumbnailLegacy = {
    large : {
        url: string;
    },
    medium: {
        url: string;
    },
    small : {
        url: string;
    },
    watch : {
        url: string;
    }
}

// 무슨 타입이 될진 모르겠지만, 어떤 객체의 프로퍼티를 추출한 키 유니온 타입
type Record<K extends keyof any,V> = {
    [key in K] : V
}

// 객체의 프로퍼티를 유니온 타입으로 받고
// 두번째 인수로는 그 프로퍼티들의 타입
type Thumnail = Record<'large' | 'medium' | 'small', {url: string; size: number}>