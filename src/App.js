import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

import EventImage from "./A-Galaxy-Event_Bangkok_main_1.jpg";
import PhotographyImage from "./dariusz-sankowski-mj2NwYH3wBA-unsplash.jpg";
import AdventureImage from "./gina-lin-m27OTMegUyA-unsplash.jpg";
import LearningImage from "./green-chameleon-s9CC2SKySJM-unsplash.jpg";
import FitnessImage from "./ibrahim-asad-7s_cg4ZG1Mo-unsplash.jpg";
import FamilyImage from "./james-besser-df80NBQyziU-unsplash.jpg";
import CodingImage from "./alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  fullPageHeight: {
    height: "100%",
  },
  grow: {
    flex: "1 1 auto",
  },
  paper: {
    backgroundImage: `url(${EventImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    borderRadius: "0 30px 30px 0",
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
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
  footerContent: {
    color: "white",
    paddingLeft: theme.spacing(8),
  },
  eventCard: {
    borderRadius: "20px",
  },
  exploreSection: {
    paddingLeft: theme.spacing(6),
  },
  discoverItems: {
    marginTop: theme.spacing(1),
  },
  menu: {
    display: "flex",
    boxShadow: "none",
    paddingRight: theme.spacing(3),
  },
  filterOption: {
    width: "75%",
    height: "150px",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  filterImage: {
    flex: "1 1 auto",
    padding: theme.spacing(1),
  },
  filterWording: {
    flex: "1 0 auto",
    paddingTop: "1em",
    overflowWrap: "anywhere",
  },
  filterCircleImage: {
    objectFit: "cover",
    borderRadius: "60px",
    width: "100%",
    height: "100%",
  },
  active: {
    backgroundColor: "orange",
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
                <Typography variant="h6">GDG Group</Typography>
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
        <Grid container item spacing={0} className={classes.exploreSection}>
          <Grid item xs={12}>
            <AppBar
              classes={{ root: classes.menu }}
              position="relative"
              color="transparent"
            >
              <Toolbar disableGutters>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <div className={classes.grow}></div>
                <Typography>My calendar</Typography>
                <IconButton>
                  <Badge>
                    <NotificationsIcon />
                  </Badge>
                  <Typography>Notification</Typography>
                </IconButton>
                <IconButton>
                  <Avatar>W</Avatar>
                </IconButton>
              </Toolbar>
            </AppBar>
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
            <Grid container item spacing={3}>
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
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4">Type of Events</Typography>
              </Grid>
              <Grid container item xs={12} justify="space-between" spacing={2}>
                <Grid item xs={2}>
                  <Paper className={[classes.active, classes.filterOption]}>
                    <div className={classes.filterImage}>
                      <img
                        src={PhotographyImage}
                        alt="something"
                        className={classes.filterCircleImage}
                      />
                    </div>
                    <Typography className={classes.filterWording}>
                      Photography
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.filterOption}>
                    <div className={classes.filterImage}>
                      <img
                        src={AdventureImage}
                        alt="adventure"
                        className={classes.filterCircleImage}
                      />
                    </div>
                    <Typography className={classes.filterWording}>
                      Adventure
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.filterOption}>
                    <div className={classes.filterImage}>
                      <img
                        src={LearningImage}
                        alt="learning"
                        className={classes.filterCircleImage}
                      />
                    </div>
                    <Typography className={classes.filterWording}>
                      Learning
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.filterOption}>
                    <div className={classes.filterImage}>
                      <img
                        src={FitnessImage}
                        alt="fitness"
                        className={classes.filterCircleImage}
                      />
                    </div>
                    <Typography className={classes.filterWording}>
                      Fitness
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.filterOption}>
                    <div className={classes.filterImage}>
                      <img
                        src={FamilyImage}
                        alt="family"
                        className={classes.filterCircleImage}
                      />
                    </div>
                    <Typography className={classes.filterWording}>
                      Family
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.filterOption}>
                    <div className={classes.filterImage}>
                      <img
                        src={CodingImage}
                        alt="coding"
                        className={classes.filterCircleImage}
                      />
                    </div>
                    <Typography className={classes.filterWording}>
                      Coding
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
