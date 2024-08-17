import React from 'react';
// import './header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            HR-Management Syatem
                        </Typography>

                        {/* <Button color="inherit">Login</Button> */}
                        {/* <Link to="/about">About</Link> */}
                        <Button color="inherit" component={Link} to="/login">
                            Manger Login
                        </Button>
                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button>
                        {/* <Button color="inherit">Register</Button> */}

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header
