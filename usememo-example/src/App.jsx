import './App.css';
import HeavyComponent from './components/HeavyComponent';

/*
    React.memo : 컴포넌트
    useCallback : 함수
    useMemo : value (함수, 값)
*/

const navStyle = {
    backgroundColor: 'yellow',
    marginBottom: '30px',
};

const footerStyle = {
    backgroundColor: 'green',
    marginBottom: '10ox',
};

function App() {
    console.log('App 리랜더링');

    return (
        <>
            <nav style={navStyle}>네이게이션 바</nav>
            <HeavyComponent></HeavyComponent>
            <footer style={footerStyle}>푸터 영역이에요</footer>
        </>
    );
}

export default App;
