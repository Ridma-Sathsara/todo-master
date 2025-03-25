import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo App
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export default Header;