import {
  CREATE_CHART_LABELS,
  CREATE_CHART_DATA,
} from '../constants/ChartConstants';

export const chartLabels = (labels) => async (dispatch) => {
  dispatch({ type: CREATE_CHART_LABELS, payload: labels });
};

export const chartData = (data) => async (dispatch) => {
  dispatch({ type: CREATE_CHART_DATA, payload: data });
};
