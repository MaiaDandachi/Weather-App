import React from 'react';
import { shallow } from 'enzyme';
import TempCheckbox from './TempCheckbox';
import RadioGroup from '@material-ui/core/RadioGroup';

describe('TempCheckBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const TempChangeHandler = jest.fn();
  const unit = 'imperial';

  const wrapper = shallow(
    <TempCheckbox TempChangeHandler={TempChangeHandler} unit={unit} />
  );

  it('renders RadioGroup', () => {
    expect(wrapper.find(RadioGroup)).toHaveLength(1);
  });

  it('calls TempChangeHandler when onChange', () => {
    const event = { target: { value: 'metric' } };
    const radio = wrapper.find(RadioGroup);
    radio.simulate('change', event);
    expect(TempChangeHandler).toHaveBeenCalled();
  });
});
