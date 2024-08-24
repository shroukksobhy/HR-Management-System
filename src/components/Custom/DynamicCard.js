import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const DynamicCard = ({ title, description, imageUrl, path }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {imageUrl ?
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={title}
                    sx={{ objectFit: 'fill' }}
                /> : null}
            <CardActionArea component={RouterLink} to={path}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

            {/* <Button size="small">Learn More</Button> */}
        </Card >
    );
};

export default DynamicCard;
