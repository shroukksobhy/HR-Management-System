import React, { useContext } from 'react';
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
import { AuthContext } from './Custom/AuthProvider';
import Sidebar from './Custom/Sidebar';
function Header() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    return (
        <div className='header'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        {isAuthenticated ?
                            <Sidebar /> :
                            null
                        }
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                            <Link to="/dashboard" underline="hover">
                                HR-Management System
                            </Link>

                        </Typography>
                        {isAuthenticated ? (
                            <div>
                                <Button color="inherit" component={Link} to="/profile">
                                    Profile
                                </Button>
                                <Button color="inherit" onClick={logout}>
                                    Logout
                                </Button>
                            </div>
                            // <button onClick={logout}>Logout</button>
                        ) :
                            <div>
                                <Button color="inherit" component={Link} to="/login">
                                    Manger Login
                                </Button>

                                <Button color="inherit" component={Link} to="/register">
                                    Register
                                </Button>
                            </div>

                        }
                        {/* <Button color="inherit" component={Link} to="/login">
                            Manger Login
                        </Button>
                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button> */}

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header
