import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './LoaderStyles';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.progress}>
      <CircularProgress color='secondary' className={classes.spinner} />
    </div>
  );
};

export default Loader;
