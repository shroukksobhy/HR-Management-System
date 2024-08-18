import React, { useContext } from 'react';
import { Box, Typography, Avatar, Container, Grid, Card } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Stack, ListItem, Scrollbar } from '@mui/material';
// import { useAuth } from './Custom/AuthProvider';
import { AuthContext } from './Custom/AuthProvider';
const navConfig = [
    {
        title: 'dashboard',
        path: '/'
    },
    {
        title: 'user',
        path: '/user'
    },
    {
        title: 'product',
        path: '/products'
    },
    {
        title: 'blog',
        path: '/blog'
    },
    {
        title: 'login',
        path: '/login'
    },
    {
        title: 'Not found',
        path: '/404'
    }
];
const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
        {navConfig.map((item) => (
            <ListItem key={item.title} item={item} />
        ))}
    </Stack>
);
const renderContent = (
    // { renderMenu }
    <div>
        {renderMenu}
    </div>
);
function Dashboard() {
    const { user } = useContext(AuthContext);
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box
                sx={{
                    py: 2,
                    px: 2.5,
                    display: 'flex',
                    borderRadius: 1.5,
                    alignItems: 'center',
                    bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
                }}
            >
                <Avatar src="/a" alt="Shrouk" />
                <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">HI user? {user}</Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Manager
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                my: 3,
                py: 2,
                px: 2.5,
                display: 'flex',
                borderRadius: 1.5,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),

            }}>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Good Moring,{user} 👋
                </Typography>
            </Box>
        </Container>

    )
}

export default Dashboard
