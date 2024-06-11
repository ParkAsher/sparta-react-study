import './App.css';
import useInput from './hooks/useInput';

function App() {
    const [name, onChangeNameHandler] = useInput();
    const [password, onChangePasswordHandler] = useInput();
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');

    // const onChangeNameHadler = (e) => {
    //     setName(e.target.value);
    // };

    // const onChangePasswordHandler = (e) => {
    //     setPassword(e.target.value);
    // };

    return (
        <div>
            <input type='text' value={name} onChange={onChangeNameHandler} />
            <input type='text' value={password} onChange={onChangePasswordHandler} />
        </div>
    );
}

export default App;
