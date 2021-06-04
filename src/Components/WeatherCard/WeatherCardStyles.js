import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: 0,
  },

  icon: {
    height: 70,
    width: 70,
    margin: ' 0 auto',
  },

  textSpace: {
    marginTop: '15px',
  },

  card: {
    transition: 'transform 0.5s',

    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
