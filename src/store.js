import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { weatherListReducer } from './reducers/WeatherReducer';
import { chartLabelsReducer, chartDataReducer } from './reducers/ChartReducers';

const reducer = combineReducers({
  weatherList: weatherListReducer,
  chartLabels: chartLabelsReducer,
  chartData: chartDataReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
