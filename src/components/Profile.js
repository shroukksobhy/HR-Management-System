import React, { useState, useEffect, useContext } from 'react';
import { Container, Box, Card, TextField, Grid, Button } from '@mui/material';
import { AuthContext } from './Custom/AuthProvider';
import axios from 'axios';

const Profile = () => {
    // const [user, setUser] = useState({
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //     position: 'Full Stack Developer',
    //     mobile_number: '(+20)1286011876'
    // });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser((prevUser) => ({
    //         ...prevUser,
    //         [name]: value
    //     }));
    // };
    let { user, setUser } = useContext(AuthContext);
    const [email, setEmail] = useState(user.email || '');

    const handleUpdateInfo = async (e) => {
        console.log("this is ");

    }
    let token = localStorage.getItem('token');
    console.log(token);
    console.log(user);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('Response:', response);
                // user = response.data.user;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        // Cleanup function (optional)
        return () => {
            console.log('Component unmounted');
        };
    }, [])
    return (
        <Container className="profile-container">
            <Box m={3}>
                <Card>
                    <h1>User Profile</h1>
                    <Box component="form" p={5} onSubmit={handleUpdateInfo}>
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
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoFocus
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}

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
                                    value={user.role}
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
                        <Button type="submit"
                            variant="contained">Save</Button>

                    </Box>
                </Card>

            </Box >
        </Container >
    );
};

export default Profile;
