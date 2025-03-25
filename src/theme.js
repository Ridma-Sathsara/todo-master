import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0e546b', 
    },
    secondary: {
      main: '#aeb6bf', 
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff',   
    },
    text: {
      primary: '#212121', 
      secondary: '#757575' 
    },
    action: {
      selected: '#e0e0e0' 
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontSize: '1rem', 
      fontWeight: 500
    },
    body1: {
      fontSize: '1rem' 
    },
    caption: {
      fontSize: '0.8rem' 
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, 
          padding: '8px 16px'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8 
          }
        }
      }
    }
  }
});

export default theme;