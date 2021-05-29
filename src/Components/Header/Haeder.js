import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './HeaderStyles';

const Haeder = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.title} variant='h2'>
      Weather App
    </Typography>
  );
};

export default Haeder;
