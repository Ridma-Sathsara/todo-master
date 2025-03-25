import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  // stroing todo in am array and store current filter

  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useLocalStorage('filter', 'all'); 
  const [searchTerm, setSearchTerm, ] = useState('');
 

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text, 
        completed: false 
      }]);
    }
  };

  // checking the todo is completed or not
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    console.log('Editing todo:', id, 'New text:', newText);
    setTodos(prevTodos => {
      const updated = prevTodos.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
      );
      console.log('Updated todos:', updated);
      return updated;
    });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter = 
      filter === 'completed' ? todo.completed :
      filter === 'pending' ? !todo.completed :
      true;
    
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <TodoContext.Provider
      value={{
        todos:filteredTodos,
        addTodo,
        toggleTodo,
        editTodo,
        deleteTodo,
        searchTerm,          
        setSearchTerm,
        filter,                  // current filter
        setFilter,
        totalTodos: todos.length,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);