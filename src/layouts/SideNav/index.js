import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import './SideNav.css';

const drawerWidth = 'var(--drawer-width)';

function SideNav({ mobileOpen, handleDrawerToggle, drawerType }) {

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
    { text: 'Contact', icon: <MailIcon />, path: '/contact' },
  ];

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) => isActive ? 'sidenav-link sidenav-link-active' : 'sidenav-link'}
              onClick={drawerType === 'temporary' ? handleDrawerToggle : undefined}
            >
              <ListItemButton className="sidenav-list-item-button">
                <ListItemIcon className="sidenav-list-item-icon">
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} className="sidenav-list-item-text" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
      className="sidenav-container"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'var(--sidebar-bg)',
            color: 'var(--sidebar-text-color)',
          },
        }}
        className="sidenav-drawer-temporary"
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'var(--sidebar-bg)',
            color: 'var(--sidebar-text-color)',
            borderRight: 'none',
          },
        }}
        open
        className="sidenav-drawer-permanent"
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default SideNav;