import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: "#2f2e30",
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  customButton: {
    color: '#cccccc!important',
    padding: '8px 20px !important',
    fontSize: '1rem!important'
  },
  buttonActive: {
    color: '#fff!important',
    padding: '8px 20px !important',
    fontSize: '1rem!important'
  },
  drinksWrapper: {
    //display: 'flex'
  }
}));
