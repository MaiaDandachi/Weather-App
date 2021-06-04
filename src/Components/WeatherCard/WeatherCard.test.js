import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import WeatherCard from './WeatherCard';

import { Card, Typography } from '@material-ui/core';

const mockStore = configureStore();
let store = mockStore({});

describe('WeatherCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const listOfWeather = [
    {
      main: { temp: 64.24 },
      dt_txt: '2021-06-04 09:00:00',
      weather: [{ main: 'Rain' }],
    },
    {
      main: { temp: 65.24 },
      dt_txt: '2021-06-04 12:00:00',
      weather: [{ main: 'Rain' }],
    },
  ];
  const showChartHandler = jest.fn();
  const date = '2021-06-04';

  const wrapper = mount(
    <Provider store={store}>
      <WeatherCard
        listOfWeather={listOfWeather}
        date={date}
        showChartHandler={showChartHandler}
      />
    </Provider>
  );

  it('renders successfully', () => {
    expect(wrapper).toBeTruthy();
  });

  it('renders a card', () => {
    expect(wrapper.find(Card).length).toBe(1);
  });

  it('outputs correct temeperature avg', () => {
    expect(wrapper.find(Typography).at(0).text()).toContain('65 °');
  });
});
