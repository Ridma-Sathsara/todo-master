export const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };
  
  export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
 