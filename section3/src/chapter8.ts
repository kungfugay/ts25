/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * ex) String, number
 */

type Admin = {
    tag: "ADMIN";       // string 리터럴 타입
    name: string;
    kickCount: number;
}

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
}

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
}

type User = Admin | Member | Guest;     // 타입 간에 서로소 집합의 관계를 갖게 됨

function login(user: User) {

    // switch 문으로 더 직관적으로
    switch (user.tag) {
        case "ADMIN" : {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER" : {
            console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);
            break;
        }
        case "GUEST" : {
            console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);
            break;
        }
    }
    
}


//------------------------------------------
/**
 * 복습 겸 한 가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

// AsyncTask를 3개의 서로소로 분리

type LoadingTask = {
    state: "LOADING";
}

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
}

type SuccessTask = {
    state: "SUCCESS";
    response : {
        data: string;
    }
}

// 선택적 프로퍼티를 사용하는 것보다는 서로소 유니온 타입을 사용하는 것이 더 안전하다.
type AsyncTask = LoadingTask | FailedTask | SuccessTask;


function processResult(task:AsyncTask) {
    switch (task.state) {
        case 'LOADING' : {
            console.log ("로딩 중");
            break;
        }
        case 'FAILED' : {
            console.log(`에러 발생: ${task.error.message}`);
            break;
        }
        case 'SUCCESS' : {
            console.log(`성공: ${task.response.data}`);
            break;
        }
    }

}

const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~",
    }
}

const success: AsyncTask = {
    state: "SUCCESS",
    response : {
        data: "데이터~~",
    }
}