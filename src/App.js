import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EventImage from "./A-Galaxy-Event_Bangkok_main_1.jpg";
import "./App.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  fullPageHeight: {
    height: "100%",
  },
  paper: {
    backgroundImage: `url(${EventImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
  },
  heading: {
    color: "white",
    flex: "0 1 auto",
  },
  centerContent: {
    paddingLeft: theme.spacing(8),
    flex: "1 1 auto",
  },
  joinButtonSize: {
    width: "25%",
  },
  contentContainer: {
    height: "100%",
    padding: theme.spacing(3),
  },
  footerContent: {
    color: "white",
    paddingLeft: theme.spacing(8),
  },
  eventCard: {
    borderRadius: "20px",
  },
  discoverSection: {
    paddingLeft: theme.spacing(2),
  },
  discoverItems: {
    marginTop: theme.spacing(1),
  },
  menu: {
    boxShadow: "none",
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
          <Paper className={classes.paper}>
            <Grid
              container
              spacing={0}
              direction="column"
              className={classes.contentContainer}
            >
              <Grid item className={classes.heading}>
                <Typography variant="h3">GDG Group</Typography>
              </Grid>
              <Grid
                container
                spacing={0}
                item
                direction="column"
                justify="center"
                className={classes.centerContent}
              >
                <Typography variant="h2">GDG Group</Typography>
                <Typography variant="body1" gutterBottom>
                  Description of the event and some small information
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.joinButtonSize}
                >
                  Secondary
                </Button>
              </Grid>
              <Grid item className={classes.footerContent}>
                <AvatarGroup max={4}>
                  <Avatar>N</Avatar>
                  <Avatar>W</Avatar>
                  <Avatar>S</Avatar>
                  <Avatar>A</Avatar>
                  <Avatar>E</Avatar>
                </AvatarGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container item xs={5} spacing={0}>
        <Grid container item spacing={0}>
          <Grid item xs={12}>
            <AppBar
              classes={{ root: classes.menu }}
              position="relative"
              color="transparent"
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <Typography>My calendar</Typography>
                <IconButton>
                  <Badge></Badge>
                  <Typography>Notification</Typography>
                </IconButton>
                <Avatar>W</Avatar>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} className={classes.discoverSection}>
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
            <Grid container spacing={3} className={classes.discoverItems}>
              <Grid item xs={4}>
                <Card className={classes.eventCard}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="GDG Group"
                      height="140"
                      image={EventImage}
                    />
                    <CardContent>
                      <Typography>GDG Group</Typography>
                      <Typography>Coding and development</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.eventCard}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="GDG Group"
                      height="140"
                      image={EventImage}
                    />
                    <CardContent>
                      <Typography>GDG Group</Typography>
                      <Typography>Coding and development</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.eventCard}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="GDG Group"
                      height="140"
                      image={EventImage}
                    />
                    <CardContent>
                      <Typography>GDG Group</Typography>
                      <Typography>Coding and development</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            1
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
