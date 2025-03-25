import { useState } from 'react';
import { Checkbox, IconButton, Box, Typography, TextField } from '@mui/material';
import { Delete, Edit, Close, Check } from '@mui/icons-material';
import { useTodo } from '../../context/TodoContext';
import { styled } from '@mui/system';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [error, setError] = useState(false);

  const StyledTodoItem = styled(Box)(({ theme, completed }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    margin: theme.spacing(1, 0),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: completed
      ? theme.palette.action.selected
      : theme.palette.background.paper,
    '&:hover': {
      boxShadow: theme.shadows[2]
    }
  }));

  const TodoText = styled(Typography)(({ completed }) => ({
    flexGrow: 1,
    marginLeft: '16px',
    textDecoration: completed ? 'line-through' : 'none',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  }));

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
    <StyledTodoItem completed={todo.completed}>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        color="primary"
        disabled={isEditing}
      />

      {isEditing ? (
        <TextField
          fullWidth
          variant="standard"
          value={editedText}
          onChange={(e) => {
            setEditedText(e.target.value);
            setError(false);
          }}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') handleCancel();
          }}
          sx={{ mx: 2 }}
          error={error}
          helperText={error ? "Task cannot be empty" : ""}
        />
      ) : (
        <TodoText completed={todo.completed}>{todo.text}</TodoText>
      )}

      <Box sx={{ display: 'flex', gap: 1 }}>
        {isEditing ? (
          <>
            <IconButton
              aria-label="save"
              onClick={handleSave}
              color="primary"
              size="small"
            >
              <Check fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="cancel"
              onClick={handleCancel}
              color="secondary"
              size="small"
            >
              <Close fontSize="small" />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              aria-label="edit"
              onClick={handleEditStart}
              color="primary"
              size="small"
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => deleteTodo(todo.id)}
              color="error"
              size="small"
            >
              <Delete fontSize="small" />
            </IconButton>
          </>
        )}
      </Box>
    </StyledTodoItem>
  );
};

export default TodoItem;