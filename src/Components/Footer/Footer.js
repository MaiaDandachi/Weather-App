import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './FooterStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant='subtitle2'>Copyright &copy; WeatherApp</Typography>
    </div>
  );
};

export default Footer;
