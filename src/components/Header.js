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
            {/* <List>
                <Link to={'/'} >Home</Link>
                <Link to={'/faq'} >Faq</Link>
            </List> */}
        </Box >
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" >
                <Toolbar >
                    {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton> */}

                    <Typography variant='h5' className='logo-title' component="div" sx={{ flexGrow: 1, }}>
                        <Link to={`/`} >
                            Tasks Manager 
                        </Link>
                    </Typography>
                    {/* <Box sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: 'flex-end' }}>
                        <Link to={'/'} >Home</Link>
                        <Link to={'/faq'} >Faq</Link>
                    </Box> */}
                </Toolbar>
            </AppBar>
            <Box component="nav">

                <Typography variant='h5' className='logo-title' component="div" sx={{ flexGrow: 1 }}>
                    <Link to={`/`} >
                        Tasks Manager mobile
                    </Link>
                </Typography>
            </Box>

        </Box >
    )
}
