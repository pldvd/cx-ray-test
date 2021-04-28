import './App.css';
import Container from '@material-ui/core/Container'
import AppHeader from './components/AppHeader';
import BlogPosts from './components/BlogPosts';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';
import ToastMessage from './components/ToastMessage';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  const isLoading = useSelector(store => store.isLoading);

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <ToastMessage />
        {isLoading ? <Loader /> : null}
        <Container maxWidth="md">
          <AppHeader text="Awesome Blog App" />
          <BlogPosts />
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
