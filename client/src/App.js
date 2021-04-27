import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import { Container } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <AppHeader text="Awesome Blog App" />
      </Container>
    </div>
  );
}

export default App;
