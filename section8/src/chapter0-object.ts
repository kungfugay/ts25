/**
 * 인덱스드 엑세스 타입
 * => 프로퍼티만 쏙 빼서 그 타입을 정의해줄 수 있는 문법
 * => 객체, 배열, 튜플에 모두 사용 가능
 */

// 객체의 예시
interface Post {
    title : string;
    content: string;
    author : {
        id : number;
        name: string;
    }
}

function printAuthorInfo(author:Post["author"]) { // (주의) "author"는 값이 아니다! 
    console.log(`${author.name}-${author.id}`);
}

// 중첩도 가능하다.
function printAuthorIdInfo(author:Post["author"]["id"]) {
    console.log(`${author}`);
}

const post: Post = {
    title : "이건 제목",
    content : "게시글 본문",
    author : {
        id: 1,
        name: "이예진"
    }
}

printAuthorInfo(post.author);