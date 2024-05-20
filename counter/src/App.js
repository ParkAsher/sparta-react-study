import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const plusCountHandler = () => {
        setCount(count + 1);
    };

    const minusCountHandler = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={minusCountHandler}>-</button>
                <button onClick={plusCountHandler}>+</button>
            </div>
        </div>
    );
}

export default App;
