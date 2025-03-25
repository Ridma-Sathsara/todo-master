import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTodo } from "../../context/TodoContext";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        mb: 2,
        gap: 1,
        width: "100%",
      }}
    >
      <TextField
        variant="outlined"
        label="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        disabled={!input.trim()}
        sx={{ minWidth: "120px" }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
