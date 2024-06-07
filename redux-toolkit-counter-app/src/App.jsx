import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, minusNumber } from './redux/modules/counter';

function App() {
    // useSelector
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const onPlusButtonClickHandler = () => {
        dispatch(addNumber(1));
    };

    const onMinusButtonClickHandler = () => {
        dispatch(minusNumber(1));
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
