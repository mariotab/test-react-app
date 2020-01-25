import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    width: 'calc(33.333% - 30px)',
    boxShadow: 'none',
    margin: 15,
    float: 'left',
  },
  media: {
    height: 140,
    backgroundSize: 'contain'
  },
  label: {
    maxHeight: 40,
    textAlign: 'center',
    position: 'absolut'
  },
  labelWrapper: {
    height: 45,
    position: 'relative'
  }
});
