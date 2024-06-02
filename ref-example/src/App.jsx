import './App.css';
import { useEffect, useRef, useState } from 'react';

// function App() {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(0);

//     const style = {
//         border: '1px solid black',
//         margin: '10px',
//         padding: '10px',
//     };

//     const plusStateCountButtonHandler = () => {
//         setCount(count + 1);
//     };

//     // 값은 증가하지만 렌더링은 일어나지 않고있다.
//     const plusRefCountButtonHandler = () => {
//         countRef.current++;
//         console.log(countRef.current);
//     };

//     return (
//         <>
//             <div style={style}>
//                 state 영역입니다. {count} <br />
//                 <button onClick={plusStateCountButtonHandler}>state 증가</button>
//             </div>
//             <div style={style}>
//                 ref 영역입니다. {countRef.current} <br />
//                 <button onClick={plusRefCountButtonHandler}>ref 증가</button>
//             </div>
//         </>
//     );
// }

function App() {
    const idRef = useRef('');
    const pwRef = useRef('');

    const [id, setId] = useState('');

    // 화면이 렌더링 될 때, 어떤 작업을 하고싶다. : useEffect
    useEffect(() => {
        idRef.current.focus();
    }, []);

    useEffect(() => {
        if (id.length >= 10) {
            pwRef.current.focus();
        }
    }, [id]);

    const idOnchangeHandler = (e) => {
        setId(e.target.value);
    };

    return (
        <>
            <div>
                아이디 : <input type='text' value={id} onChange={idOnchangeHandler} ref={idRef} />
            </div>
            <div>
                비밀번호 : <input type='password' ref={pwRef} />
            </div>
        </>
    );
}

export default App;
