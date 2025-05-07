// src/layout/SideNav.js
import React, { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  IconButton,
  Divider,
  useMediaQuery,
  Box  // Add this import
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { 
  Home as HomeIcon,
  School as EducationIcon,
  Work as ProjectsIcon,
  ContactMail as ContactIcon,
  Code as SkillsIcon
} from '@mui/icons-material';

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const navItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Education', path: '/education', icon: <EducationIcon /> },
    { text: 'Projects', path: '/projects', icon: <ProjectsIcon /> },
    { text: 'Skills', path: '/skills', icon: <SkillsIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open && (
        <IconButton
          color="inherit"
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            left: 10,
            top: 10,
            zIndex: theme => theme.zIndex.drawer + 1
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            marginTop: '64px', // To avoid overlapping with header
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              component={Link} 
              to={item.path}
              onClick={isMobile ? toggleDrawer : undefined}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}