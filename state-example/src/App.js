import './App.css';
import { useState } from 'react';

function App() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <div>number state : {number}</div>
            <button
                onClick={() => {
                    // 기존 업데이트 방법
                    // 배치성으로 처리.
                    // 배치 업데이트.
                    // 명령을 모아 최종적으로 한번만 실행
                    // setNumber(number + 1);
                    // setNumber(number + 1);
                    // setNumber(number + 1);

                    // 렌더링이 잦다! -> 성능에 이슈가 있는 것!
                    // 불필요한 리-렌더링 방지

                    // 함수형 업데이트
                    // 명령을 모아서 순차적으로 1번씩 실행
                    setNumber((currentNumber) => currentNumber + 1);
                    setNumber((currentNumber) => currentNumber + 1);
                    setNumber((currentNumber) => currentNumber + 1);
                }}
            >
                +
            </button>
        </>
    );
}

export default App;
