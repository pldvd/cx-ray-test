import './App.css';
import Container from '@material-ui/core/Container'
import AppHeader from './components/AppHeader';
import BlogPosts from './components/BlogPosts';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <AppHeader text="Awesome Blog App" />
          <BlogPosts />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
