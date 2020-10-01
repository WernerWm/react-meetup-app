import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EventImage from './A-Galaxy-Event_Bangkok_main_1.jpg'
import './App.css';

const useStyles = makeStyles((theme) => ({
  fullPageHeight: {
    height: '100%'
  },
  paper: {
    backgroundImage: `url(${EventImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'
  },
  heading: {
    color: 'white',
    flex: '0 1 auto'
  },
  centerContent: {
    paddingLeft: theme.spacing(8),
    flex: '1 1 auto'
  },
  joinButtonSize: {
    width: '25%'
  },
  contentContainer: {
    height: '100%',
    padding: theme.spacing(3)
  },
  footerContent: {
    color: 'white',
    paddingLeft: theme.spacing(8),
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.fullPageHeight}>
      <Grid container item xs={8} spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
            <Grid container spacing={0} direction="column" className={classes.contentContainer}>
              <Grid item className={classes.heading}>
                <Typography variant="h3">
                  GDG Group
                </Typography>
              </Grid>
              <Grid container spacing={0} item direction="column" justify="center" className={classes.centerContent}>
                <Typography variant="h2">
                  GDG Group
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Description of the event and some small information
                </Typography>
                <Button variant="contained" color="secondary" className={classes.joinButtonSize}>
                  Secondary
                </Button>
              </Grid>
              <Grid item className={classes.footerContent}>
                <Typography variant="h3">
                  GDG Group
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container item xs={4} spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Grid item xs={12}>1</Grid>
          <Grid item xs={12}>1</Grid>
          <Grid item xs={12}>1</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
