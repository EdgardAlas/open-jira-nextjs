import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlined from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlined from '@mui/icons-material/MailOutlineOutlined';
import { useUIContext } from '../../hooks';

const menuItems: string[] = ['index', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
  const { sidemenuOpen, closeSidebar } = useUIContext();

  return (
    <Drawer anchor='left' open={sidemenuOpen} onClose={closeSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={text}></ListItemText>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
