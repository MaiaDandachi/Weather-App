import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import TempCheckbox from '../../components/TempChexbox';
import WeatherCard from '../../components/WeatherCard';
import Chart from '../../components/Chart';
import Loader from '../../components/Loader';
import useStyles from './WeatherScreenStyles';
import { listWeather } from '../../actions/WeatherActions';

const WeatherScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const dummydata = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  const weatherList = useSelector((state) => state.weatherList);
  const { loading, error, weatherData } = weatherList;

  // Default unit is Fahrenheit
  const [tempUnit, setTempUnit] = useState('imperial');
  // Current Page index starts from 1
  const [currentPage, setCurrentPage] = useState(1);
  // Number of cards per page
  const cardsPerPage = 3;
  //Number of total pages
  const numberOfPages = Math.ceil(dummydata.length / cardsPerPage);

  //Dispatch listWeather to get the weather for 5 days
  useEffect(() => {
    dispatch(listWeather(tempUnit));
  }, [dispatch, tempUnit]);

  //Increment current page index
  const handleIncrement = () => {
    if (currentPage < numberOfPages) setCurrentPage(currentPage + 1);
  };

  // Decrement current page index
  const handleDecrement = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className={classes.main}>
          <Grid container className={classes.grid} direction='column'>
            {/* 1st row */}
            <Grid container item xs={12} justify='center'>
              <Grid item>
                <TempCheckbox unit={tempUnit} setUnit={setTempUnit} />
              </Grid>
            </Grid>

            {/* 2nd row */}
            <Grid
              container
              item
              direction='row'
              xs={12}
              style={{ marginTop: '15px' }}
              justify='space-between'
              // spacing={1}
            >
              <Grid item>
                {currentPage > 1 && (
                  <IconButton onClick={handleDecrement}>
                    <ArrowBackIosIcon fontSize='large' />
                  </IconButton>
                )}
              </Grid>

              {currentPage < numberOfPages && (
                <Grid item>
                  <IconButton onClick={handleIncrement}>
                    <ArrowForwardIosIcon fontSize='large' />
                  </IconButton>
                </Grid>
              )}
            </Grid>

            {/* 3rd row Cards */}
            <Grid item container xs={12} direction='row' spacing={1}>
              {dummydata
                .slice(
                  currentPage * cardsPerPage - cardsPerPage,
                  currentPage * cardsPerPage
                )
                .map((item, index) => {
                  return <WeatherCard />;
                })}
            </Grid>
            <Grid
              item
              container
              direction='row'
              alignItems='center'
              justify='center'
            >
              <Grid item xs={12} sm={9}>
                <Chart />
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default WeatherScreen;
