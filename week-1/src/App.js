import logo from './logo.svg';
import 'App.css';

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

/* Props Children */

// 자식 컴포넌트 태그 사이에 데이터를 넣는 방식
function App() {
    return <User>안녕하세요</User>;
}

function User(props) {
    console.log('props', props);
    return <div>{props.children}</div>;
}

export default App;
