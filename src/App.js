import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import EventSection from "./components/eventSection";
import DiscoverSection from "./components/discoverSection";
import FilterSection from "./components/filterSection";
import Nav from "./components/nav";

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

  return (
    <Grid container spacing={0} className={classes.fullPageHeight}>
      <Grid container item xs={7} spacing={0}>
        <Grid item xs={12}>
          <EventSection></EventSection>
        </Grid>
      </Grid>
      <Grid container item xs={5} spacing={0}>
        <Grid container item spacing={0} className={classes.exploreSection}>
          <Grid item xs={12}>
            <Nav></Nav>
          </Grid>
          <Grid item xs={12}>
            <DiscoverSection></DiscoverSection>
          </Grid>
          <Grid item xs={12}>
            <FilterSection></FilterSection>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
