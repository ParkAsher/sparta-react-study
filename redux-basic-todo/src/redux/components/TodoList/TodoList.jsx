import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDiv, StyledTodoListHeader, StyledTodoListBox } from './styles';
import Todo from '../Todo';
import { useQuery } from 'react-query';
import { getTodos } from '../../../apis/todos';

/**
 * 컴포넌트 개요 : 메인 > TODOLIST. 할 일의 목록을 가지고 있는 컴포넌트
 * 2022.12.16 : 최초 작성
 *
 * @returns TodoList 컴포넌트
 */
function TodoList({ isActive }) {
    //const todos = useSelector((state) => state.todos);

    const { isLoading, isError, data } = useQuery('todos', getTodos);

    if (isLoading) {
        return <div>로딩중입니다...</div>;
    }

    if (isError) {
        return <h1>오류가 발생하였습니다!</h1>;
    }

    return (
        <StyledDiv>
            <StyledTodoListHeader>
                {isActive ? '해야 할 일 ⛱' : '완료한 일 ✅'}
            </StyledTodoListHeader>
            <StyledTodoListBox>
                {data
                    .filter((item) => item.isDone === !isActive)
                    .map((item) => {
                        return <Todo key={item.id} todo={item} isActive={isActive} />;
                    })}
            </StyledTodoListBox>
        </StyledDiv>
    );
}

export default TodoList;
