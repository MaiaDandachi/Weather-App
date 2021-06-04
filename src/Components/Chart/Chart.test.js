import React from 'react';
import { shallow, mount } from 'enzyme';
import Chart from './Chart';

const labels = ['00:00', '03:00', '06:00', '09:00'];
const data = [15, 20, 25, 17];

describe('Chart', () => {
  test('should render successfully', () => {
    const wrapper = shallow(<Chart labels={labels} chartData={data} />);

    expect(wrapper).toBeTruthy();
  });
});
