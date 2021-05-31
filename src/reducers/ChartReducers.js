import {
  CREATE_CHART_LABELS,
  CREATE_CHART_DATA,
} from '../constants/ChartConstants';

export const chartLabelsReducer = (state = { labels: [] }, action) => {
  switch (action.type) {
    case CREATE_CHART_LABELS:
      return { labels: action.payload };

    default:
      return state;
  }
};

export const chartDataReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case CREATE_CHART_DATA:
      return { data: action.payload };

    default:
      return state;
  }
};
