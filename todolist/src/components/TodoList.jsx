import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StTodos = styled.div``;

const StTodo = styled.div`
    border: 1px solid #ddd;
    width: 20%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-radius: 12px;
`;

function TodoList() {
    const { todos } = useSelector((state) => state.todos);

    console.log(todos);

    return (
        <StTodos>
            {todos.map((todo) => (
                <StTodo key={todo.id}>{todo.todo}</StTodo>
            ))}
        </StTodos>
    );
}

export default TodoList;
