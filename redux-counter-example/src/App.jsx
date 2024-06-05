import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
    // useSelector

    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const onPlusButtonClickHandler = () => {
        dispatch({
            type: 'PLUS_ONE',
        });
    };

    const onMinusButtonClickHandler = () => {
        dispatch({
            type: 'MINUS_ONE',
        });
    };

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <button onClick={onPlusButtonClickHandler}>+</button>
            <button onClick={onMinusButtonClickHandler}>-</button>
        </>
    );
}

export default App;
