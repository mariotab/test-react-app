import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: "#2f2e30"
  },
  tabsWrapper: {
    boxShadow: 'none'
  },
  customIndicator: {
    display: 'none'
  },
  selected: {
  }
}));
