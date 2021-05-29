import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TempCheckbox = (props) => {
  // Handles the change of radio buttons and set state to the selected temperature unit
  const handleTemChange = (event) => {
    props.setUnit(event.target.value);
  };

  return (
    <>
      <RadioGroup
        row
        aria-label='temperature'
        name='temperature'
        value={props.unit}
        onChange={handleTemChange}
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
