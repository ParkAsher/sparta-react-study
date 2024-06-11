import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addNumber, __minusNumber, addNumber, minusNumber } from './redux/modules/counter';

function App() {
    const [number, setNumber] = useState(0);

    const globalNumber = useSelector((state) => state.counter.number);

    const dispatch = useDispatch();

    const onNumberInputChangeHandler = (e) => {
        setNumber(e.target.value);
    };

    const onClickAddNumberHandler = () => {
        //dispatch(addNumber(+number));
        dispatch(__addNumber(+number));
    };

    const onClickMinusNumberHandler = () => {
        //dispatch(minusNumber(+number));
        dispatch(__minusNumber(+number));
    };

    return (
        <div>
            <div>{globalNumber}</div>
            <input type='number' onChange={onNumberInputChangeHandler} />
            <button onClick={onClickAddNumberHandler}>더하기</button>
            <button onClick={onClickMinusNumberHandler}>빼기</button>
        </div>
    );
}

export default App;
