/**
 * 프로미스
 */

// 비동기 작업의 결과값(resolve)를 number로 좁힘
// 실패했을 때는 타입 좁히기 불가능
const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(20); // resolve() 20 - 결과값. 인수는 number만 전달 가능
        reject("~~~ 때문에 실패")
    }, 3000);
});

promise.then((response)=>{
    console.log(response * 10);  // unknown 타입 -> number
})

promise.catch((err)=>{
    if (typeof err === "string") {
        console.log(err);   // any -> string
    }
    
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost():Promise<Post> {                // 방식1 (추천) : 함수의 선언부만 보고도 반환 타입을 알 수 있음
    return new Promise<Post>((resolve, reject)=>{   // 방식2 : return 문 안에 new Promise<Post>
        setTimeout(()=>{
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 내용"
            });
        }, 3000)
    })
}

const postRequest = fetchPost();
postRequest.then((post)=>{
    post.id
})
postRequest.catch((error)=>{

})