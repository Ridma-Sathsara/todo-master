import { CssBaseline, ThemeProvider } from '@mui/material';
import { TodoProvider } from './context/TodoContext';
import TodoPage from './pages/TodoPage';
import theme from './theme';
import Header from './components/Layout/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoProvider>
        <Header />
        <TodoPage />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;