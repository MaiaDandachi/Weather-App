import axios from 'axios';
import {
  WEATHER_LIST_REQUEST,
  WEATHER_LIST_SUCCESS,
  WEATHER_LIST_FAIL,
  WEATHER_LIST_CEL_REQUEST,
  WEATHER_LIST_CEL_SUCCESS,
  WEATHER_LIST_CEL_FAIL,
} from '../constants/WeatherConstants';
// const { REACT_APP_API_ID } = process.env;

// console.log(process.env);

export const listWeather =
  (units = 'imperial') =>
  async (dispatch) => {
    try {
      dispatch({ type: WEATHER_LIST_REQUEST });
      dispatch({ type: WEATHER_LIST_CEL_REQUEST });

      // Make request to OpenWeatherMap API
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${process.env.REACT_APP_API_ID}&cnt=40&units=${units}`
      );

      dispatch({ type: WEATHER_LIST_SUCCESS, payload: data });

      const celData = data.list.map((item) => {
        return {
          ...item,
          main: {
            ...item.main,
            temp: Math.ceil(((item.main.temp - 32) * 5) / 9),
          },
        };

        /**
         * {main: {
         *   temp: '',
         *   min_temp: ''
         * },
         * weather: {},
         * dt: ''}
         */
      });

      dispatch({
        type: WEATHER_LIST_CEL_SUCCESS,
        payload: { ...data, list: celData },
      });
    } catch (error) {
      dispatch({
        type: WEATHER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
