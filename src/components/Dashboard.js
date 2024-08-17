import React from 'react'
import { Box, Typography, Avatar } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Stack, ListItem, Scrollbar } from '@mui/material';

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
    return (
        <div>
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
                <Avatar src="/a" alt="photoURL" />

                <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">Shrouk</Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Manager
                    </Typography>
                </Box>
            </Box>
            {renderContent}

        </div>
    )
}

export default Dashboard
