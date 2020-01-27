import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  customRoot: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  card: {
    display: 'flex',
    backgroundColor: '#2f2e30',
    color: '#fff'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailsText: {
    fontSize: '0.95rem',
    fontFamily: 'roboto'
  },
  detailsName: {
    fontSize: '1.25rem',
    fontFamily: 'roboto'
  },
  content: {
    flex: '1 0 auto',
    color: '#fff'
  },
  cover: {
    width: 100,
    backgroundColor:'#fff',
    height: '100px',
    backgroundSize: 'contain',
    marginTop: 10
  },
  imgWrapper: {
    backgroundColor:'#fff',
    height: '120px',
    margin: 'auto 10px',
    borderRadius: 10,
  },
  paperRoot: {
    backgroundColor: 'none',
    borderRadius: 10
  },
}));
