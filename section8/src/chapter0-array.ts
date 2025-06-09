// 배열에서 indexed access
// PostList[number] 또는 PostList[0]
// 여기서도 0은 값이 아니라 넘버 리터럴 타입
// 인덱스에 들어가는 건 무조건 타입 !!!
type PostList = {
    title : string;
    content: string;
    author : {
        id : number;
        name: string;
    }
}[];

function printAuthorInfo(author:PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = {
    title : "이건 제목",
    content : "게시글 본문",
    author : {
        id: 1,
        name: "이예진"
    }
}

printAuthorInfo(post.author);