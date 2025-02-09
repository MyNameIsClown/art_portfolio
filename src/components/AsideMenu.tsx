import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { 
    Avatar, 
    List, 
    ListItemButton, 
    Collapse,
    ListItemIcon,
    ListItemText,
    ListItem
} 
from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./AsideMenu.css"
import Link from '@mui/material/Link';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

export default function AsideMenu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const menuItemsText = [
    "Creación de personajes",
    "Editorial",
    "Fotografía iustrada",
    "Pinturas",
    "Proyectos personales",
    "Proyectos de clase"
  ]

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className='menuContainer'>
      <Avatar
        alt="Irene Ayerbe"
        sx={{ width: 200, height: 200 }}
        />
        <h1>Irene Ayerbe Ruiz</h1>
        <h4>Ilustradora</h4>
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Portafolio" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {menuItemsText.map((item, index)=>(
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
            <ListItemButton>
                <ListItemText primary="Descargar portafolio" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Sobre mi" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Contacto" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="correo@gmail.com" />
            </ListItemButton>
        </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
