import { useState } from 'react';
import { Checkbox, IconButton, Box, Typography, TextField,Stack,Paper
} from '@mui/material';
import { Delete, Edit, Close, Check } from '@mui/icons-material';
import { useTodo } from '../../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [error, setError] = useState(false);

  const handleEditStart = () => {
    setEditedText(todo.text);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editedText.trim()) {
      setError(true);
      return;
    }
    editTodo(todo.id, editedText.trim());
    setIsEditing(false);
    setError(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text);
    setError(false);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        borderLeft: `4px solid ${todo.completed ? '#4caf50' : '#2196f3'}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 3
        }
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          color="primary"
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 28 }
          }}
        />

        <Box sx={{ flexGrow: 1 }}>
          {isEditing ? (
            <TextField
              fullWidth
              variant="outlined"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
                if (e.key === 'Escape') handleCancel();
              }}
              autoFocus
              error={error}
              helperText={error ? "Task cannot be empty" : ""}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1
                }
              }}
            />
          ) : (
            <Typography
              variant="body1"
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'text.secondary' : 'text.primary',
                fontWeight: todo.completed ? 400 : 500,
                wordBreak: 'break-word'
              }}
            >
              {todo.text}
            </Typography>
          )}
        </Box>

        <Stack direction="row" spacing={1}>
          {isEditing ? (
            <>
              <IconButton 
                onClick={handleSave} 
                color="success"
                size="medium"
              >
                <Check />
              </IconButton>
              <IconButton 
                onClick={handleCancel} 
                color="error"
                size="medium"
              >
                <Close />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton 
                onClick={handleEditStart} 
                color="primary"
                size="medium"
              >
                <Edit />
              </IconButton>
              <IconButton 
                onClick={() => deleteTodo(todo.id)} 
                color="error"
                size="medium"
              >
                <Delete />
              </IconButton>
            </>
          )}
        </Stack>
      </Stack>

      {todo.completed && !isEditing && (
        <Typography 
          variant="caption" 
          sx={{
            display: 'block',
            mt: 1,
            color: 'success.main',
            fontStyle: 'italic'
          }}
        >
          Completed
        </Typography>
      )}
    </Paper>
  );
};

export default TodoItem;