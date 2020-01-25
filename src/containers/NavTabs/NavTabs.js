import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel/TabPanel'
import LocalCafe from '@material-ui/icons/LocalCafe'
import Restaurant from '@material-ui/icons/Restaurant'
import Search from '@material-ui/icons/Search'
import AttachMoney from '@material-ui/icons/AttachMoney'
import {useStyles} from './NavTabsStyle'
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

  let DrinksPanel = withDrinksPanel()

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
            icon={<LocalCafe style={{ fontSize: 33 }}/>}
            {...a11yProps(0)}
            classes={{
            selected: classes.selected
          }}/>
          <Tab
            icon={<Restaurant style={{ fontSize: 33 }}/>}
            {...a11yProps(1)}
            classes={{
              selected: classes.selected
            }}/>
          <Tab
            icon={<AttachMoney style={{ fontSize: 33 }}/>}
            classes={{
              selected: classes.selected
            }}/>
          <Tab
            icon={<Search style={{ fontSize: 33 }}/>}
            classes={{
              selected: classes.selected
            }}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DrinksPanel/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
