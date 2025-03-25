import { useTodo } from '../../context/TodoContext';
import { Button, ButtonGroup, Box, Typography } from '@mui/material';

const TodoFilter = () => {
  const { filter, setFilter, totalTodos } = useTodo();

  return (
    <Box sx={{ my: 2 }}>

      {/* displaying no of todos */}

      <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
        {totalTodos} {totalTodos === 1 ? 'task' : 'tasks'} total           
      </Typography>

      <ButtonGroup 
       fullWidth
      sx={{
        width:{
          xs: '100%', // mobile view
          sm: '80%',  // tablet view
          md: '30%',  // desktop view
          
        },
        // mx: 'auto'
      
      }}
      >
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'pending' ? 'contained' : 'outlined'}
          onClick={() => setFilter('pending')}
        >
          Pending
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TodoFilter;