import './App.css';
import { styled } from 'styled-components';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

const StContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

function App() {
    return (
        <StContainer>
            <AddForm></AddForm>
            <TodoList></TodoList>
        </StContainer>
    );
}

export default App;
