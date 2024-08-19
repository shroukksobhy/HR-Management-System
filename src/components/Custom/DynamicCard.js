import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const DynamicCard = ({ title, description, imageUrl }) => {
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

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            {/* <Button size="small">Learn More</Button> */}
        </Card>
    );
};

export default DynamicCard;
