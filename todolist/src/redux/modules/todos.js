// action value
const ADD_TODO = 'app/todo/ADD_TODO';

// action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

// initial state
const initialState = {
    todos: [
        {
            id: 1,
            todo: 'react 공부하기',
        },
    ],
};

// reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        default:
            return state;
    }
};

export default todos;
