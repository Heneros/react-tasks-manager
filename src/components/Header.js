import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const navItems = ["Home", "Faq", "Contact Us"];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant='h5' sx={{ my: 2 }}>
                Tasks Manager
            </Typography>
            <Divider />
            <List>
                <Link to={'/'} >Home</Link>
                <Link to={'/faq'} >Faq</Link>
            </List>
        </Box >
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h5' component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        Tasks Manager
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: 'flex-end' }}>
                        <Link to={'/'} >Home</Link>
                        <Link to={'/faq'} >Faq</Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' }
                    }}
                >  {drawer}
                </Drawer>
                <Typography variant='h5' component="div" >
                    Tasks Manager
                </Typography>
            </Box>

        </Box >
    )
}
