import { TextField, InputAdornment, IconButton, Box, useMediaQuery, useTheme ,Typography} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import { useTodo,  } from '../../context/TodoContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm ,todos} = useTodo();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const searchResultsCount = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  ).length;



  return (
    <Box 
      sx={{ 
        width: '100%',
        position: 'relative',
        mb: 2
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder={isMobile ? "Search..." : "Search tasks..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
            paddingLeft: 1,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[1],
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: theme.shadows[3],
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
          endAdornment: searchTerm && (
            <IconButton
              onClick={() => setSearchTerm('')}
              size="small"
              sx={{ visibility: searchTerm ? 'visible' : 'hidden' }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
      
      {/*  search mobile */}
      {isMobile && searchTerm && (
        <Typography 
          variant="caption" 
          sx={{
            position: 'absolute',
            bottom: -20,
            left: 10,
            color: 'text.secondary'
          }}
        >
         {searchResultsCount} results
        </Typography>
      )}
    </Box>
  );
};

export default SearchBar;