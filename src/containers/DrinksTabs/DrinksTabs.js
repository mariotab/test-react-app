import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel/TabPanel'
import {useStyles} from './DrinksTabsStyle'
import withDrinksPanel from '../HOC/withDrinksPanel'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const AllDrinksPanel = withDrinksPanel('_')
  const PizzaDrinksPanel = withDrinksPanel('pizza')
  const SteakDrinksPanel = withDrinksPanel('steak')

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabsWrapper}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          variant="fullWidth"
          classes={{
            indicator: classes.customIndicator
          }}
        >
          <Tab
            label="ALL"
            {...a11yProps(0)}
            classes={{
            selected: classes.selected
          }}/>
          <Tab
            label="Pizza"
            {...a11yProps(1)}
            classes={{
              selected: classes.selected
            }}/>
          <Tab
            label="STEAK"
            classes={{
              selected: classes.selected
            }}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AllDrinksPanel/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PizzaDrinksPanel/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SteakDrinksPanel/>
      </TabPanel>
    </div>
  );
}
