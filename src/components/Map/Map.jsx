import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';



const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');

    const dummyImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80";


    return (<div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyANDuLB4gOSOMeAlbgtmyXVOVx1LJIzspo' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={(e) => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            }}
            onChildClick={(child) => setChildClicked(child)}
        >
            {places?.map((place, index) => (
                <div className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={index}
                >
                    {!isDesktop ? (
                        <LocationOnOutlinedIcon color="primary"
                            fontSize='large' />
                    ) :
                        (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography
                                    className={classes.Typography}
                                    gutterBottom
                                    variant='subtitle2'
                                > 
                                    <img
                                        className={classes.pointer}
                                        height="50px"
                                        src={place.photo ? place.photo.images.small.url : dummyImage}
                                        alt={place.name}
                                    />
                                     <Rating size="small" value={Number(place.rating)} readOnly/>
                                </Typography>
                            </Paper>
                        )}
                </div>
            ))}
        </GoogleMapReact>
    </div>);
}

export default Map;