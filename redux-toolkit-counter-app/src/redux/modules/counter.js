import { createSlice } from '@reduxjs/toolkit';

// action value
// const ADD_NUMBER = 'ADD_NUMBER';
// const MINUS_NUMBER = 'MINUS_NUMBER';

// action creator
// export const addNumber = (payload) => {
//     return {
//         type: ADD_NUMBER,
//         payload: payload,
//     };
// };

// export const minusNumber = (payload) => {
//     return {
//         type: MINUS_NUMBER,
//         payload: payload,
//     };
// };

// initial state
const initialState = {
    number: 0,
};

// reducer
// const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_NUMBER:
//             return {
//                 number: state.number + action.payload,
//             };
//         case MINUS_NUMBER:
//             return {
//                 number: state.number - action.payload,
//             };
//         default:
//             return state;
//     }
// };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = state.number + action.payload;
        },
        minusNumber: (state, action) => {
            state.number = state.number - action.payload;
        },
    },
});

export default counterSlice.reducer;
export const { addNumber, minusNumber } = counterSlice.actions;
