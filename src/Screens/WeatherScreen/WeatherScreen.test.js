import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import WeatherScreen from './WeatherScreen';
import IconButton from '@material-ui/core/IconButton';

const mockStore = configureStore();
let store = mockStore({
  weatherList: {
    loading: false,
    weatherData: {
      list: [
        {
          main: {
            temp: 64.24,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          dt_txt: '2021-06-04 09:00:00',
        },
        {
          main: {
            temp: 64.24,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          dt_txt: '2021-06-05 12:00:00',
        },
        {
          main: {
            temp: 64.24,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          dt_txt: '2021-06-06 03:00:00',
        },
        {
          main: {
            temp: 64.24,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10d',
            },
          ],
          dt_txt: '2021-06-07 03:00:00',
        },
      ],
    },
  },
  chartLabels: { labels: [] },
  chartData: { data: [] },
});

describe('WeatherScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  store.dispatch = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <WeatherScreen />
    </Provider>
  );

  it('renders successfully', () => {
    expect(wrapper).toBeTruthy();
  });

  it('increments pageNumber when increment arrow clicked and shows decrement arrow', () => {
    const arrow_icon = wrapper.find('.increase').at(1);
    arrow_icon.simulate('click');

    expect(wrapper.find(IconButton).at(0)).toHaveLength(1);
  });
});
