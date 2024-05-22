import './App.css';

function App() {
    const testArr = ['감자', '고구마', '오이', '가지', '옥수수'];

    return (
        <div className='app-style'>
            {testArr.map((item) => {
                return <div className='component-style'>{item}</div>;
            })}
        </div>
    );
}

export default App;
