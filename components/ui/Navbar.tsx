import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useUIContext } from '../../hooks';

export const Navbar = () => {
  const { openSideMenu } = useUIContext();
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant='h6'>Open Jira</Typography>
      </Toolbar>
    </AppBar>
  );
};
