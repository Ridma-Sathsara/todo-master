import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {

  // get saved value from local storage 
    const [value, setValue] = useState(() => {   
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;  // if not any todos, then use initial value
  });

  // save values 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));  // value change into JSON format
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;