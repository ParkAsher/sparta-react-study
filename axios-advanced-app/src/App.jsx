import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import api from './axios/api';

function App() {
    const [todos, setTodos] = useState(null);
    const [todo, setTodo] = useState({ title: '' });

    const [targetId, setTargetId] = useState('');
    const [newTitle, setNewTitle] = useState('');

    // 조회 함수
    const fetchTodos = async () => {
        // const { data } = await axios.get('http://localhost:4000/todos');
        // const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
        const { data } = await api.get('/todos');
        setTodos(data);
    };

    useEffect(() => {
        // db로부터 값을 가져올 것이다.
        fetchTodos();
    }, []);

    const onTodoChangeHandler = (e) => {
        setTodo({
            title: e.target.value,
        });
    };

    // 추가 함수
    const onAddTodoButtonClickHandler = async (todo) => {
        // axios.post('http://localhost:4000/todos', todo);
        // axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, todo);
        api.post('/todos', todo);
        // setTodos([...todos, todo]);
        // setTodo({
        //     title: '',
        // });
        fetchTodos();
    };

    // 삭제 함수
    const onDeleteTodoButtonClickHandler = async (id) => {
        // axios.delete(`http://localhost:4000/todos/${id}`);
        // axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
        api.delete(`/todos/${id}`);
        setTodos(
            todos.filter((item) => {
                return item.id !== id;
            })
        );
    };

    const onTargetIdChangeHandler = (e) => {
        setTargetId(e.target.value);
    };

    const onNewTitleChangeHandler = (e) => {
        setNewTitle(e.target.value);
    };

    // 수정 함수
    const onUpdateButtonClickHandler = async () => {
        // axios.patch(`http://localhost:4000/todos/${targetId}`, {
        //     title: newTitle,
        // });
        api.patch(`/todos/${targetId}`, {
            title: newTitle,
        });
        setTodos(
            todos.map((item) => {
                if (item.id == targetId) {
                    return { ...item, title: newTitle };
                } else {
                    return item;
                }
            })
        );
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
                        onAddTodoButtonClickHandler(todo);
                    }}
                >
                    <input type='text' value={todo.title} onChange={onTodoChangeHandler} />
                    <button type='submit'>추가</button>
                </form>
            </div>
            <div>
                {/* 데이터 영역*/}
                {todos?.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.id} {item.title}
                            <button onClick={() => onDeleteTodoButtonClickHandler(item.id)}>
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
