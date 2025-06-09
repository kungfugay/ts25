// 튜플에서 indexed access

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3]; // 에러 (길이 초과)

type TupNum = Tup[number];  // **최적의 공통 타입을 뽑아온다. (이 경우 유니온)