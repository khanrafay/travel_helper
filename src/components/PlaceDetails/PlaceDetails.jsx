import React, { Component } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardAction, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

const PlaceDetails = ({ place }) => {
    console.log('place', place);
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : ''}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variat={5}>{place.name}</Typography>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails