import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import useStyles from './WeatherCardStyles';
import { Cloud, Snow, Sun, Rain } from '../../assets/images';

const WeatherCard = ({ weatherData }) => {
  const classes = useStyles();

  const icons = {
    Clear: Sun,
    Clouds: Cloud,
    Rain: Rain,
    Snow: Snow,
  };

  return (
    <>
      <Grid container item xs={12} sm={4} justify='center'>
        <Card variant='outlined' className={classes.card}>
          <CardContent>
            <CardMedia
              className={classes.icon}
              // image={icons[weatherData.weather.main]}
              image={icons['Clear']}
              title='Weather Icocn'
            />
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              align='center'
              className={classes.textSpace}
            >
              {20 + '°'}
            </Typography>

            <Typography
              variant='body1'
              color='textSecondary'
              align='center'
              component='p'
            >
              Sun May 30 2021
            </Typography>

            <Typography
              variant='body1'
              color='textSecondary'
              align='center'
              className={classes.textSpace}
            >
              Clouds
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default WeatherCard;
