import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    // textAlign: 'center',
    // alignItems: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(3),
  },

  grid: {
    width: '100%',
    margin: 0,
  },
}));

export default useStyles;
