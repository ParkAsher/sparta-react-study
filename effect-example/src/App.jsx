import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');

    // App 컴포넌트가 화면에 렌더링될 때, useEffect 가 실행된다.
    useEffect(() => {
        console.log('hello useEffect');
    });

    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
        </div>
    );
}

export default App;
