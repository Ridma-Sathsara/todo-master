import { Container, Box, Typography } from "@mui/material";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import TodoItem from "../components/TodoItem/TodoItem";
import { useTodo } from "../context/TodoContext";
import SearchBar from "../components/TodoFilter/SearchBar";
import { useTheme } from "@mui/material/styles";

const TodoPage = () => {
  const { todos } = useTodo();
  const theme = useTheme();

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "99vw",
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto auto 1fr",
        gridTemplateColumns: "1fr",
        gap: { xs: 1, sm: 2, md: 3 },
        p: { xs: 1.5, sm: 3, md: 4, lg: 6 },
        bgcolor: "background.default",
        transition: "all 0.3s ease",
        overflowX: "hidden",
      }}
    >
      {/* header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          position: "sticky",
          top: 0,
          bgcolor: "background.default",
          zIndex: 1,
          pt: { xs: 1, sm: 2 },
          pb: { xs: 1, sm: 2 },
        }}
      >
        <TodoForm />
      </Box>

      {/* filter  */}
      <Box
        sx={{
          position: "sticky",
          top: { xs: "calc(3.5rem + 72px)", sm: "calc(3.5rem + 80px)" },
          bgcolor: "background.default",
          zIndex: 1,
          pb: 1,
        }}
      >
        <TodoFilter />
      </Box>

      {/* search bar */}
      <Box
        sx={{
          position: "sticky",
          top: { xs: 56, sm: 64 }, 
          zIndex: 10,
          mb: 2,
          p: 1,
          bgcolor: "background.default",
          borderBottom: "1px solid",
          borderColor: "divider",
          backdropFilter: "blur(8px)",
          [theme.breakpoints.down("sm")]: {
            px: 0,
            top: 56,
          },
        }}
      >
        <SearchBar />
      </Box>

      {/* todo List */}
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 1.5 },
          overflowY: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "primary.light",
            borderRadius: "3px",
          },
        }}
      >
        {todos.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "40vh", sm: "50vh" },
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                color: "text.secondary",
              }}
            >
              No tasks yet
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: { xs: "80%", sm: "60%", md: "50%" },
                color: "text.disabled",
              }}
            >
              Add your first task using the input above
            </Typography>
          </Box>
        ) : (
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              },
              gap: { xs: 1, sm: 1.5, md: 2 },
            }}
          >
            {todos.map((todo) => (
              <Box
                component="li"
                key={todo.id}
                sx={{
                  minHeight: { xs: "72px", sm: "80px" },
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                
                <TodoItem todo={todo} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default TodoPage;
