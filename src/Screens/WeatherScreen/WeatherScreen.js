import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Grid, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import TempCheckbox from '../../Components/TempChexbox';
import WeatherCard from '../../Components/WeatherCard';
import useStyles from './WeatherScreenStyles';

const WeatherScreen = () => {
  const classes = useStyles();

  const dummydata = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  // Default unit is Fahrenheit
  const [tempUnit, setTempUnit] = useState('imperial');

  // Current Page index starts from 1
  const [currentPage, setCurrentPage] = useState(1);

  // Number of cards per page
  const cardsPerPage = 3;

  const numberOfPages = Math.ceil(dummydata.length / cardsPerPage);

  const handleIncrement = () => {
    if (currentPage < numberOfPages) setCurrentPage(currentPage + 1);
  };

  const handleDecrement = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
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
        </Grid>
      </div>
    </>
  );
};

export default WeatherScreen;
