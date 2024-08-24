import React, { useState, useContext } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const managerList = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {/* {['Home', 'About', 'Contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
                <ListItem component={Link} to="/dashboard">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem component={Link} to="/employees">
                    <ListItemText primary="Employees" />
                </ListItem>
                <ListItem component={Link} to="/attendances">
                    <ListItemText primary="Attendance" />
                </ListItem>
                <ListItem component={Link} to="/payrolls">
                    <ListItemText primary="Payrolls" />
                </ListItem>
                <ListItem component={Link} to="/settings">
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </div>
    );
    const empolyeeList = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem component={Link} to="/dashboard">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem component={Link} to="/profile">
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem component={Link} to="/attendances">
                    <ListItemText primary="My Attendance" />
                </ListItem>
                <ListItem component={Link} to="/payrolls">
                    <ListItemText primary="My Payrolls" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            {/* <Button onClick={toggleDrawer(true)}>Open Sidebar</Button> */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                {/* {managerList()} */}
                {user.role = 'manager' ? managerList() : empolyeeList()}
            </Drawer>
        </div>
    );
}

export default Sidebar;
