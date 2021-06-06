import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import { Grid, Paper } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import TempCheckbox from '../../Components/TempChexbox';
import WeatherCard from '../../Components/WeatherCard';
import Chart from '../../Components/Chart';
import Loader from '../../Components/Loader';
import useStyles from './WeatherScreenStyles';
import { listWeather } from '../../actions/WeatherActions';

const WeatherScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const weatherList = useSelector((state) => state.weatherList);
  const { loading, error, weatherData } = weatherList;

  const chartLabels = useSelector((state) => state.chartLabels);
  const { labels } = chartLabels;

  const chartData = useSelector((state) => state.chartData);
  const { data } = chartData;

  //-----------------------------------------------//

  // Default unit is Fahrenheit
  const [tempUnit, setTempUnit] = useState('imperial');

  // Current Page index starts from 1
  const [currentPage, setCurrentPage] = useState(1);

  const [showChart, setShowChart] = useState(false);

  // --------------------------------------------//

  //Dispatch listWeather to get the weather for 5 days
  useEffect(() => {
    dispatch(listWeather(tempUnit));
    setShowChart(false);
  }, [dispatch, tempUnit]);

  // -------------------------------------------//

  // group forecasts with same date --->
  // {2021-05-30 : [{ forecast 1}, {forecast 2}, {}], 2021-05-31: [{}, {}]}
  const forecasts = weatherData?.list?.reduce(function (r, forecast) {
    r[forecast.dt_txt.split(' ')[0]] = [
      ...(r[forecast.dt_txt.split(' ')[0]] || []),
      forecast,
    ];
    return r;
  }, {});

  // --------------------------------------------//

  // Number of cards per page
  const cardsPerPage = 3;

  //Number of total pages
  const numberOfPages =
    forecasts && Math.ceil(Object.keys(forecasts).length / cardsPerPage);

  //Increment current page index
  const handleIncrement = () => {
    if (currentPage < numberOfPages) setCurrentPage(currentPage + 1);
    setShowChart(false);
  };

  // Decrement current page index
  const handleDecrement = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    setShowChart(false);
  };

  // Slice forecasts obj depending on the current page and number of cards
  const sliced_forecasts =
    forecasts &&
    Object.keys(forecasts)
      .slice(
        currentPage * cardsPerPage - cardsPerPage,
        currentPage * cardsPerPage
      )
      .reduce((result, key) => {
        result[key] = forecasts[key];

        return result;
      }, {});

  const showChartHandler = () => {
    setShowChart(true);
  };

  // Handles the change of radio buttons and set state to the selected temperature unit
  const TempChangeHandler = (value) => {
    setTempUnit(value);
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
            {/* 1st row Radio Buttons*/}
            <Grid container item xs={12} justify='center'>
              <Grid item>
                <TempCheckbox
                  unit={tempUnit}
                  TempChangeHandler={TempChangeHandler}
                />
              </Grid>
            </Grid>

            {/* 2nd row Arrows*/}
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
                  <IconButton onClick={handleDecrement} className='decrease'>
                    <ArrowBackIosIcon fontSize='large' />
                  </IconButton>
                )}
              </Grid>

              {currentPage < numberOfPages && (
                <Grid item>
                  <IconButton onClick={handleIncrement} className='increase'>
                    <ArrowForwardIosIcon fontSize='large' />
                  </IconButton>
                </Grid>
              )}
            </Grid>

            {/* 3rd row Cards */}
            <Grid item container xs={12} direction='row' spacing={1}>
              {sliced_forecasts &&
                Object.entries(sliced_forecasts).map(([key, value], index) => {
                  return (
                    <WeatherCard
                      listOfWeather={value}
                      date={key}
                      key={index}
                      showChartHandler={showChartHandler}
                    />
                  );
                })}
            </Grid>

            {showChart && (
              <Grid
                item
                container
                direction='row'
                alignItems='center'
                justify='center'
              >
                <Grid item xs={12} sm={9}>
                  <Paper className={classes.paper}>
                    <Chart labels={labels} data={data} />
                  </Paper>
                </Grid>
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

export default WeatherScreen;
