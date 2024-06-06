import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { plusOne, minusOne, plusN, minusN } from './redux/modules/counter';
import { useState } from 'react';

function App() {
    const [number, setNumber] = useState(0);

    // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
    // useSelector
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const onPlusButtonClickHandler = () => {
        //dispatch(plusOne());
        dispatch(plusN(number));
    };

    const onMinusButtonClickHandler = () => {
        dispatch(minusN(number));
    };

    const onNumberChangeHandler = (e) => {
        setNumber(+e.target.value);
    };

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <div>
                <input type='number' value={number} onChange={onNumberChangeHandler}></input>
            </div>
            <button onClick={onPlusButtonClickHandler}>+</button>
            <button onClick={onMinusButtonClickHandler}>-</button>
        </>
    );
}

export default App;
