import { useEffect, useState } from 'react';
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
    ListItem,
    Typography
} 
from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./AsideMenu.css"
import Link from '@mui/material/Link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import sectionData from '../data/sections.json';

const drawerWidth = 400;
const avatarSize = 200;

interface sectionData {
  id: number;
  title: string;
  url: string;
}

export default function AsideMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [sections, setSections] = useState<sectionData[]>([]);

  useEffect(() => {
    setSections(sectionData);
  }, []);

  const handleClick = () => {
    setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen);
  };

  const handleDrawerClose = () => {
    setIsClosingDrawer(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosingDrawer(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosingDrawer) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <List>
      {
        mobileOpen ? (
          <ListItemButton onClick={handleDrawerClose}>
            <ListItemIcon className='close-icon'>
              <CloseOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
        ) : null
      }
      <ListItem>
        <Avatar 
        className='avatar'
        alt="Irene Ayerbe Ruiz" 
        src="../assets/images/icon.png" 
        sx={{ width: avatarSize, height: avatarSize }}
      />
      </ListItem>
      <ListItem>
        <Typography variant='h1'>IRENE AYERBE RUIZ</Typography>
      </ListItem>
      <ListItem>
        <Typography variant='h5'>ilustradora</Typography>
      </ListItem>
      <ListItemButton onClick={handleClick}>
          <ListItemText primary="Portafolio" />
          {isPortfolioDropdownOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isPortfolioDropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
              {sections.map((item, index)=>(
                  <ListItemButton sx={{ pl: 4 }} key={index}>
                      <ListItemText primary={item.title} />
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
  );

  return (
    <Box sx={{ display: 'flex', position: 'fixed', zIndex: 1000 }}>
      <CssBaseline />
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
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
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
