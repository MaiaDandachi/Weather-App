import axios from 'axios';
import {
  WEATHER_LIST_REQUEST,
  WEATHER_LIST_SUCCESS,
  WEATHER_LIST_FAIL,
} from '../constants/WeatherConstants';

export const listWeather =
  (units = 'imperial') =>
  async (dispatch) => {
    try {
      dispatch({ type: WEATHER_LIST_REQUEST });

      // Make request to OpenWeatherMap API
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=156c22169c72ad38806ee258dcf2fe3e&cnt=40&units=${units}`
      );

      dispatch({ type: WEATHER_LIST_SUCCESS, payload: data });
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
