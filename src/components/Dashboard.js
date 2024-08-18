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
        <Container maxWidth="xl">
            {/* {renderContent} */}
            <Box
                sx={{
                    my: 3,
                    mx: 2.5,
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
                    <Typography variant="subtitle2">HI user? {user.username}</Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Manager
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                my: 3,
                mx: 2.5,
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
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        component={Stack}
                        spacing={3}
                        direction="row"
                        sx={{
                            px: 3,
                            py: 5,
                            borderRadius: 2
                        }}
                    >
                        <Box sx={{ width: 64, height: 64 }}></Box>

                        <Stack spacing={0.5}>
                            <Typography variant="h4">714000</Typography>

                            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                                Weekly Sales
                            </Typography>
                        </Stack>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        title="New Users"
                        total={1352831}
                        color="info"
                        icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        title="Item Orders"
                        total={1723315}
                        color="warning"
                        icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        title="Bug Reports"
                        total={234}
                        color="error"
                        icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
                    />
                </Grid>
            </Grid>
            {renderContent}

        </Container>
    )
}

export default Dashboard
