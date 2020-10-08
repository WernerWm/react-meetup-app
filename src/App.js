import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
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
  Link,
  MobileStepper,
} from "@material-ui/core";

import AvatarGroup from "@material-ui/lab/AvatarGroup";

import MenuIcon from "@material-ui/icons/Menu";

import GoogleImage from "./daniel-romero-Z9fW8Nn7D24-unsplash.jpg";
import IBMImage from "./sam-pak-nwlFMVePZhI-unsplash.jpg";
import ReactImage from "./ferenc-almasi-L8KQIPCODV8-unsplash.jpg";
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
    backgroundImage: `url(${GoogleImage})`,
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
    padding: "48px 0 48px 48px",
  },
  footerContent: {
    color: "white",
    paddingLeft: theme.spacing(8),
  },
  eventCard: {
    borderRadius: "20px",
  },
  exploreSection: {
    padding: "32px 0 0 48px",
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
  menuItem: {
    paddingRight: theme.spacing(2),
  },
  dots: {
    display: "flex",
    flexDirection: "column",
  },
  dot: {
    margin: "2px 0",
  },
  MobileStepperRoot: {
    background: "none",
  },
  content: {
    width: "90%",
  },
  progressDots: {
    width: "5%",
  },
  line: {
    border: "thick solid white",
    borderRadius: "4px",
    height: "50px",
  },
  lineContainer: {
    width: "5%",
  },
}));

function App() {
  const state = {
    activeStep: 0,
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const activeStep = state;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (activeStep) => {
    this.setState({
      activeStep,
    });
  };

  const theme = createMuiTheme({
    palette: {
      primary: orange,
    },
  });

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
                className={classes.centerContent}
                justify="flex-end"
                alignItems="center"
              >
                <Grid item className={classes.content}>
                  <Typography variant="h2">GDG Group</Typography>
                  <Typography variant="body1" gutterBottom>
                    Description of the event and some small information
                  </Typography>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.joinButtonSize}
                    >
                      Join
                    </Button>
                  </ThemeProvider>
                </Grid>
                <Grid
                  container
                  item
                  className={classes.progressDots}
                  justify="flex-end"
                >
                  <MobileStepper
                    variant="dots"
                    activeStep={activeStep}
                    steps={6}
                    position="static"
                    classes={{
                      root: classes.MobileStepperRoot,
                      dots: classes.dots,
                      dot: classes.dot,
                    }}
                  />
                </Grid>
                <Grid
                  container
                  item
                  justify="center"
                  className={classes.lineContainer}
                >
                  <div className={classes.line}></div>
                </Grid>
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
                <Typography variant="body1" className={classes.menuItem}>
                  <Link
                    href="#"
                    color="textPrimary"
                    underline="none"
                    className={classes.menuItem}
                  >
                    My calendar
                  </Link>
                  <Badge badgeContent={4} color="primary">
                    <Link href="#" color="textPrimary" underline="none">
                      Notification
                    </Link>
                  </Badge>
                </Typography>
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
                <Card raised className={classes.eventCard}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="GDG Group"
                      height="250"
                      image={GoogleImage}
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
                      height="250"
                      image={IBMImage}
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
                      height="250"
                      image={ReactImage}
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
            <Grid container spacing={2}>
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
