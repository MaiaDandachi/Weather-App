import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import useStyles from './WeatherCardStyles';
import { chartLabels, chartData } from '../../actions/ChartActions';
import { Cloud, Snow, Sun, Rain } from '../../assets/images';

const WeatherCard = ({ listOfWeather, date, showChartHandler }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const icons = {
    Clear: Sun,
    Clouds: Cloud,
    Rain: Rain,
    Snow: Snow,
  };

  // Calculates temp avg of hourly temperature for each day
  const temperature_avg = parseInt(
    listOfWeather.reduce(function (prev, current) {
      return Math.ceil(prev + current.main.temp);
    }, 0) / listOfWeather.length
  );

  // Create Labels array: [00:00, 09:00, ....] for chart
  const labels = listOfWeather.map((weather) =>
    weather.dt_txt.split(' ')[1].substr(0, 5)
  );

  //Create Data array: [52, 50, ...] with temperatures for chart
  const data = listOfWeather.map((weather) => weather.main.temp);

  const chartHandler = (labels, data) => {
    dispatch(chartLabels(labels));
    dispatch(chartData(data));
    showChartHandler();
  };

  return (
    <>
      <Grid container item xs={12} sm={4} justify='center'>
        <Card
          variant='outlined'
          className={classes.card}
          onClick={() => chartHandler(labels, data)}
        >
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
              data-testid='temperature_avg'
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
