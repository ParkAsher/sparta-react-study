import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';

const StFormContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 30px;
`;

const StInput = styled.input`
    border: 1px solid #eee;
    margin: 0 24px;
    height: 25px;
    width: 300px;
    border-radius: 12px;
    outline: none;
    padding: 0 10px;
`;

const StButton = styled.button`
    border: none;
    background: #eee;
    height: 25px;
    cursor: pointer;
    width: 120px;
    border-radius: 12px;
`;

function AddForm() {
    const [todo, setTodo] = useState('');
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const onTodoChangeHandler = (e) => {
        setTodo(e.target.value);
    };

    const onTodoSubmitHandler = (e) => {
        e.preventDefault();

        if (todo === '') return;

        dispatch(
            addTodo({
                id: todos.length + 1,
                todo,
            })
        );
    };

    return (
        <StFormContainer>
            <form onSubmit={onTodoSubmitHandler}>
                <label>Todos의 제목을 입력하세요.</label>
                <StInput type='text' value={todo} onChange={onTodoChangeHandler}></StInput>
                <StButton>추가</StButton>
            </form>
        </StFormContainer>
    );
}

export default AddForm;
