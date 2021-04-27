import './App.css';
import Container from '@material-ui/core/Container'
import AppHeader from './components/AppHeader';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <AppHeader text="Awesome Blog App" />
        <BlogPosts />
      </Container>
    </div>
  );
}

export default App;
