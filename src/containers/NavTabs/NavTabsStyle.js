import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: '#c50b00',
    padding: '0 3px'
  },
  tabsWrapper: {
    boxShadow: 'none'
  },
  customIndicator: {
    display: 'none'
  },
  selected: {
    borderTopLeftRadius: '7px',
    borderTopRightRadius: '7px',
    backgroundColor: "#2f2e30"
  }
}));
