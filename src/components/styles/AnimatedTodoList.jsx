// import { motion, AnimatePresence } from "framer-motion";
// import TodoItem from '../TodoItem/TodoItem';
// import { Box } from '@mui/material';

// const AnimatedTodoList = ({ todos }) => {
//   return (
//     <AnimatePresence initial={false}>
//       {todos.map((todo) => (
//         <motion.div
//           key={todo.id}
//           layout
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ 
//             opacity: 1, 
//             height: "auto",
//             transition: { duration: 0.3 }
//           }}
//           exit={{ 
//             opacity: 0, 
//             height: 0,
//             transition: { duration: 0.2 }
//           }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         >
//           <Box sx={{ overflow: 'hidden', py: 1 }}>
//             <TodoItem todo={todo} />
//           </Box>
//         </motion.div>
//       ))}
//     </AnimatePresence>
//   );
// };

// export default AnimatedTodoList;