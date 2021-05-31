import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TempCheckbox = ({ unit, TempChangeHandler }) => {
  //cahnge temp unit to C or F
  const changeTempUnit = (event) => {
    TempChangeHandler(event.target.value);
  };
  return (
    <>
      <RadioGroup
        row
        aria-label='temperature'
        name='temperature'
        value={unit}
        onChange={changeTempUnit}
      >
        <FormControlLabel
          value='metric'
          control={<Radio color='primary' />}
          label='Celsius'
        />
        <FormControlLabel
          value='imperial'
          control={<Radio color='primary' />}
          label='Fahrenheit '
        />
      </RadioGroup>
    </>
  );
};

export default TempCheckbox;
