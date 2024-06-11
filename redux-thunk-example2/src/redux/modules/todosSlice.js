import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
    error: null,
};

// thunk 함수
export const __getTodos = createAsyncThunk('GET_TODOS', async (payload, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:4000/todos');
        console.log(response);

        // toolkit 에서 제공하는 api
        // promise => resolve(네트워크 요청이 성공한 경우) => dispatch 해주는 기능을 가진 api
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        console.log('error : ', error);

        // toolkit 에서 제공하는 api
        // promise => resolve(네트워크 요청이 실패한 경우) => dispatch 해주는 기능을 가진 api
        return thunkAPI.rejectWithValue(error);
    }
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(__getTodos.pending, (state, action) => {
    //         // 아직 진행중일 때
    //         state.isLoading = true;
    //         state.isError = false;
    //     }),
    //     builder.addCase(__getTodos.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.isError = false;
    //         state.todos = action.payload;
    //     }),
    //     builder.addMatcher(__getTodos.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.isError = true;
    //         state.error = action.payload;
    //     }),
    // },
    extraReducers: (builder) => {
        builder
            .addCase(__getTodos.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(__getTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.todos = action.payload;
            })
            .addCase(__getTodos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            });
    },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
