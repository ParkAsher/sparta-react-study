import Layout from 'Layout';
import logo from './logo.svg';
import 'App.css';
import Child from 'Child';
import { useState } from 'react';

// function App() {    // 컴포넌트 이름은 무조건 대문자로 시작
//     return (
//         // JSX 문법 = Javascript + XML(HTML)
//         // Javascript 를 사용하고 싶다면 중괄호 사용 {}
//         <div className='App'>
//             <header className='App-header'>
//                 <img src={logo} className='App-logo' alt='logo' />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className='App-link'
//                     href='https://reactjs.org'
//                     target='_blank'
//                     rel='noopener noreferrer'
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// -------------------------------------------------------------------------------------- //

// function App() {
//     // <--- 자바스크립트 영역 --->
//     const handleClick = () => {
//         alert('이것은 내가 만든 App 컴포넌트 입니다.');
//     };

//     return (
//         /* <!--- HTML/JSX 영역 ---> */
//         <div
//             style={{
//                 height: '100vh',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}
//         >
//             {/* 이곳에 퀴즈를 위한 HTML 코드를 작성해 주세요 */}
//             이것은 내가 만든 App 컴포넌트 입니다.
//             <button onClick={handleClick}>클릭!</button>
//         </div>
//     );
// }

// ----------------------------------------------------------------------------------------- //

/* 
    컴포넌트 화 
    반복 되는 요소들은 타이핑이 길어지므로 컴포넌트 화
*/
// // 자식 컴포넌트
// function Child() {
//     return <div>나는 자식입니다.</div>;
// }

// // 부모 컴포넌트
// function App() {
//     return <Child />;
// }

// /* 실습 */
// function Child() {
//     return <div>연결</div>;
// }

// function Mother() {
//     return <Child />;
// }

// function GrandFather() {
//     return <Mother />;
// }

// function App() {
//     return <GrandFather />;
// }

// --------------------------------------------------------------------------------- //

// /* JSX 실습 */
// function App() {
//     const cat_name = 'perl';

//     const number = 1;

//     const pTagStyle = {
//         color: 'red',
//         fontSize: '20px',
//     };

//     return (
//         <div>
//             <input type='text' />
//             <div>hello {cat_name}!</div>
//             {/* JSX 내에서 코드 주석은 이렇게 씁니다. */}
//             <p style={pTagStyle}>
//                 {number > 10 ? number + '은 10보다 크다' : number + '은 10보다 작다'}
//             </p>
//         </div>
//     );
// }

// ----------------------------------------------------------------------------------- //

// /* Props 예시 */

// // props를 통해 부모 -> 자식 데이터가 전달됐다.
// function Son(props) {
//     console.log('props ', props.motherName);
//     return <div>나는 {props.motherName}의 아들이에요!</div>;
// }

// // 부모 -> 자식 정보를 전달했다!
// function Mother() {
//     const name = '홍부인';
//     return <Son motherName={name} />;
// }

// function GrandFather() {
//     return <Mother />;
// }

// function App() {
//     return <GrandFather />;
// }

// --------------------------------------------------------------------------------- //

// /* Props Children */

// // 자식 컴포넌트 태그 사이에 데이터를 넣는 방식
// function App() {
//     return <User>안녕하세요</User>;
// }

// function User(props) {
//     console.log('props', props);
//     return <div>{props.children}</div>;
// }

// --------------------------------------------------------------------------------- //

// /* Props Children 문법을 사용하는 용도 */

// function App() {
//     return (
//         <Layout>
//             <div>App 컴포넌트에서 보낸 값입니다!</div>
//         </Layout>
//     );
// }

// --------------------------------------------------------------------------------- //

// function App() {
//     const name = 'test';

//     return <Child age={21}>이름</Child>;
// }

// --------------------------------------------------------------------------------- //

// function App() {
//     // React에서 state를 쓰는 목적 : UI를 바꾸기 위해서!
//     // 변경되어야 하는 값들은 state로 선언!

//     // hook
//     // const [state, setState] = useState('initial Value');
//     // const [count, setCount] = useState(0);
//     // const [todoList, setTodoList] = useState([]);

//     // 예시 1
//     // const [name, setName] = useState('김할아버지');

//     // return (
//     //     <div>
//     //         {name}
//     //         <br />
//     //         <button
//     //             onClick={function () {
//     //                 setName('박할아버지');
//     //             }}
//     //         >
//     //             클릭
//     //         </button>
//     //     </div>
//     // );

//     // 예시2
//     const [fruit, setFruit] = useState('');

//     return (
//         <div>
//             과일 :
//             <input
//                 value={fruit}
//                 onChange={function (event) {
//                     // console.log('event', event.target.value);
//                     setFruit(event.target.value);
//                 }}
//             />
//             <br></br>
//             {fruit}
//         </div>
//     );
// }

// --------------------------------------------------------------------------------- //

/* 예제 1 */
function App() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onIdchangeHandler = (e) => {
        setId(e.target.value);
    };
    const ondPwchangeHandler = (e) => {
        setPw(e.target.value);
    };

    const onloginClickHandler = () => {
        alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`);

        // 비우기
        setId('');
        setPw('');
    };

    return (
        <div>
            아이디 : <input type='text' value={id} onChange={onIdchangeHandler} />
            <br />
            비밀번호 : <input type='password' value={pw} onChange={ondPwchangeHandler} />
            <br />
            <button onClick={onloginClickHandler}>로그인</button>
        </div>
    );
}

export default App;
