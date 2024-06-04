import React from 'react';
import { useState, useMemo } from 'react';

function HeavyComponent() {
    console.log('HeavyComponent 리랜더링');

    const [count, setCount] = useState(0);

    const onPlusButtonClickHandler = () => {
        setCount(count + 1);
    };

    // 컴포넌트가 리랜더링 될 때 마다 실행되는건 비효율 적임!
    const heavyWork = () => {
        for (let i = 0; i < 2000000000; i++) {}
        return 100;
    };
    // 리랜더링 될 때 마다 다시 호출
    const value = useMemo(() => heavyWork(), []);
    console.log(`value는 ${value}입니다.`);

    return (
        <div>
            <p>나는 엄청 무거운 컴포넌트야!</p>
            <button onClick={onPlusButtonClickHandler}>누르면 아래 count가 올라가요!</button>
            <br />
            {count}
        </div>
    );
}

export default HeavyComponent;
