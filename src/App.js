//import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import Books from './components/Books';
import BookForm from './components/BookForm';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Books/>
      </Container>
    </Provider>
  );
}

export default App;
