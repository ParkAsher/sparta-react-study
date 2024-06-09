import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [todos, setTodos] = useState(null);
    const [inputValue, setInputValue] = useState({ title: '' });
    const [targetId, setTargetId] = useState('');
    const [newTitle, setNewTitle] = useState('');

    // 조회 함수
    const fetchTodos = async () => {
        const { data } = await axios.get('http://localhost:4000/todos');
        setTodos(data);
    };

    useEffect(() => {
        // db로부터 값을 가져올 것이다.
        fetchTodos();
    }, [todos]);

    const onTitleChangeHandler = (e) => {
        setInputValue({
            title: e.target.value,
        });
    };

    // 추가 함수
    const onAddTodoButtonClickHandler = async () => {
        axios.post('http://localhost:4000/todos', inputValue);
    };

    // 삭제 함수
    const onDeleteTodoButtonClickHandler = async (id) => {
        axios.delete(`http://localhost:4000/todos/${id}`);
    };

    const onTargetIdChangeHandler = (e) => {
        setTargetId(e.target.value);
    };

    const onNewTitleChangeHandler = (e) => {
        setNewTitle(e.target.value);
    };

    // 수정 함수
    const onUpdateButtonClickHandler = async () => {
        axios.patch(`http://localhost:4000/todos/${targetId}`, {
            title: newTitle,
        });
    };

    return (
        <div>
            <div>
                {/* 수정 영역*/}
                id : <input type='text' value={targetId} onChange={onTargetIdChangeHandler} />
                title : <input type='text' value={newTitle} onChange={onNewTitleChangeHandler} />
                <button onClick={onUpdateButtonClickHandler}>수정</button>
                <br />
                <br />
            </div>
            <div>
                {/* input 영역 */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onAddTodoButtonClickHandler();
                    }}
                >
                    <input type='text' value={inputValue.title} onChange={onTitleChangeHandler} />
                    <button type='submit'>추가</button>
                </form>
            </div>
            <div>
                {/* 데이터 영역*/}
                {todos?.map((todo) => {
                    return (
                        <div key={todo.id}>
                            {todo.id} {todo.title}
                            <button onClick={() => onDeleteTodoButtonClickHandler(todo.id)}>
                                삭제
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
