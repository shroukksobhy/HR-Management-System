import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, Card, TextField, Grid, Button } from '@mui/material';
import { AuthContext } from './Custom/AuthProvider';

const Profile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        position: 'Full Stack Developer',
        mobile_number: '(+20)1286011876'
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <Container className="profile-container">
            <Box m={3}>
                <Card>
                    <h1>User Profile</h1>
                    <Box component="form" p={5}>
                        <Grid container>
                            <Grid item md={6} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoFocus
                                    value={user.name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={6} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Email Address"
                                    name="username"
                                    autoFocus
                                    value={user.email}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={6} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Position"
                                    name="position"
                                    autoFocus
                                    value={user.position}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={6} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="mobile_number"
                                    label="Mobile Number"
                                    name="mobile_number"
                                    autoFocus
                                    value={user.mobile_number}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mb={2} >
                        <Button variant="contained">Save</Button>

                    </Box>
                </Card>

            </Box >
        </Container >
    );
};

export default Profile;
