import {
  WEATHER_LIST_REQUEST,
  WEATHER_LIST_SUCCESS,
  WEATHER_LIST_FAIL,
  WEATHER_LIST_CEL_REQUEST,
  WEATHER_LIST_CEL_SUCCESS,
  WEATHER_LIST_CEL_FAIL,
} from '../constants/WeatherConstants';

export const weatherListReducer = (state = { weatherData: [] }, action) => {
  switch (action.type) {
    case WEATHER_LIST_REQUEST:
      return { loading: true, weatherData: [] };

    case WEATHER_LIST_SUCCESS:
      return { loading: false, weatherData: action.payload };

    case WEATHER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const weatherCelisuceReducer = (
  state = { weatherDataCel: [] },
  action
) => {
  switch (action.type) {
    case WEATHER_LIST_CEL_REQUEST:
      return { loading: true, weatherDataCel: [] };

    case WEATHER_LIST_CEL_SUCCESS:
      return { loading: false, weatherDataCel: action.payload };

    case WEATHER_LIST_CEL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
