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
        `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=${units}`
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
