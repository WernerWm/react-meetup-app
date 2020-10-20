import React from "react";

import {
  makeStyles,
} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";

import "./App.css";
import "./carousal.css";

import BigCardEvent from './components/big-event-card';
import Discover from './components/discover';
import Filter from './components/filter';
import Nav from './components/nav';

const useStyles = makeStyles(() => ({
  fullPageHeight: {
    height: "100%",
  },
  exploreSection: {
    padding: "32px 0 0 48px",
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={0} className={classes.fullPageHeight}>
      <Grid container item xs={7} spacing={0}>
        <Grid item xs={12}>
          <BigCardEvent></BigCardEvent>
        </Grid>
      </Grid>
      <Grid container item xs={5} spacing={0}>
        <Grid container item spacing={0} className={classes.exploreSection}>
          <Grid item xs={12}>
            <Nav></Nav>
          </Grid>
          <Grid container item xs={12} spacing={4} direction="column">
            <Grid item>
              <Typography variant="h4">Discover</Typography>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Popular"></Tab>
                <Tab label="Recent"></Tab>
                <Tab label="New"></Tab>
              </Tabs>
            </Grid>
            <Grid container item>
              <Discover></Discover>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4">Type of Events</Typography>
              </Grid>
              <Grid item xs={12}>
                <Filter></Filter>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
