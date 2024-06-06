// action value
const PLUS_ONE = 'counter/PLUS_ONE';
const MINUS_ONE = 'counter/MINUS_ONE';

// action creator : action value 를 return 하는 함수
export const plusOne = () => {
    return {
        type: PLUS_ONE,
    };
};

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};

// 초기상태값(state)
const initialState = {
    number: 0,
};

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// inpunt : state & action
const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };
        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        default:
            return state;
    }
};

export default counter;
