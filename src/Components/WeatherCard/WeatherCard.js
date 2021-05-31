import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import moment from 'moment';

import useStyles from './WeatherCardStyles';
import { Cloud, Snow, Sun, Rain } from '../../assets/images';

const WeatherCard = ({ listOfWeather, date }) => {
  const classes = useStyles();

  const icons = {
    Clear: Sun,
    Clouds: Cloud,
    Rain: Rain,
    Snow: Snow,
  };

  var temperature_avg = parseInt(
    listOfWeather.reduce(function (prev, current) {
      return Math.ceil(prev + current.main.temp);
    }, 0) / listOfWeather.length
  );

  return (
    <>
      <Grid container item xs={12} sm={4} justify='center'>
        <Card variant='outlined' className={classes.card}>
          <CardContent>
            <CardMedia
              className={classes.icon}
              image={icons[listOfWeather[0].weather[0].main]}
              title='Weather Icocn'
            />
            <Typography
              gutterBottom
              variant='h5'
              component='h2'
              align='center'
              className={classes.textSpace}
            >
              {temperature_avg + ' °'}
            </Typography>

            <Typography
              variant='body1'
              color='textSecondary'
              align='center'
              component='p'
            >
              {moment(date).format('ddd, DD MMM YYYY')}
            </Typography>

            <Typography
              variant='body1'
              color='textSecondary'
              align='center'
              className={classes.textSpace}
            >
              {listOfWeather[0].weather[0].main}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default WeatherCard;
