import {   useReducer, useState } from "react";

// useState
// 1. Init State : 0
// 2. Actions : Up state + 1, Down state - 1;


// useReducer
// 1. Init State : 0
// 2. Actions : Up state + 1, Down state - 1;
// 3. Reducer
// 4. Dispatch
// Cần thêm 2 bước.

// Init state
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer (là 1 hàm)
// nhận vào state và action hiện tại trả về dữ liệu state mới dựa vào action.
// trả về đúng kiểu dữ liệu với init.

const reducer = (state, action) => {
    console.log('reducer running');
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid  Action');
    }
}

/*
    dispatch sẽ là ussReducer, nhận vào tham số đầu tiên là reducer, 
    tham số thứ 2 là initState
    Khi Component lần đàu chạy thì sẽ chạy useReducer
    Ở lần đầu sẽ return về giá trị khởi tạo là 1 array.
    phần tử thứ 1 trong array là giá trị init, giá trị thứ 2 sẽ là 1 hàm.
    hàm này được gọi là dispatch
*/ 

const UseReducerCom = () => {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initState);


    return (

        <div style={{ padding: '0 20px' }}>
            <h1>{count}</h1>
            <button
                // onClick={() => setCount(count - 1)}
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                // onClick={() => setCount(count + 1)}
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>

    );
}

export default UseReducerCom;