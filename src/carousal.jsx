import React, { Component } from "react";
import "./carousal.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  MobileStepper,
} from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

import GoogleImage from "./daniel-romero-Z9fW8Nn7D24-unsplash.jpg";
import IBMImage from "./sam-pak-nwlFMVePZhI-unsplash.jpg";
import ReactImage from "./ferenc-almasi-L8KQIPCODV8-unsplash.jpg";

export default class Carousal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: false,
      previous: false,
    };

    this.displayArray = [0, 1, 2];
  }

  isDisplayingEventCard = (key, value) => {
    return key === this.displayArray[value] ? true : false;
  };

  displayNewElement = () => {
    this.displayArray[this.displayArray.length - 3] = undefined;
    this.displayArray.push(this.displayArray.length);
    this.setState({ next: true, previous: false });
  };

  displayPreviousElement = () => {
    this.displayArray.pop();
    this.displayArray[this.displayArray.length - 3] =
      this.displayArray.length - 3;
    this.setState({ next: false, previous: true });
  };

  render() {
    return (
      <Grid container item>
        <Grid container item spacing={3} wrap="nowrap">
          <CSSTransition
            in={this.isDisplayingEventCard(0, 0)}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="card"
          >
            <Grid item xs={4}>
              <Card raised className="event-card">
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
          </CSSTransition>
          <CSSTransition
            in={this.isDisplayingEventCard(1, 1)}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="card"
          >
            <Grid item xs={4}>
              <Card className="event-card">
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
          </CSSTransition>
          <CSSTransition
            in={this.isDisplayingEventCard(2, 2)}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="card"
          >
            <Grid item xs={4}>
              <Card className="event-card">
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
          </CSSTransition>
          <CSSTransition
            in={this.isDisplayingEventCard(3, 3)}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="card"
          >
            <Grid item xs={4}>
              <Card className="event-card">
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
          </CSSTransition>
          <CSSTransition
            in={this.isDisplayingEventCard(4, 4)}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="card"
          >
            <Grid item xs={4}>
              <Card className="event-card">
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
          </CSSTransition>
          <CSSTransition
            in={this.isDisplayingEventCard(5, 5)}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="card"
          >
            <Grid item xs={4}>
              <Card className="event-card">
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
          </CSSTransition>
          <CSSTransition
            in={this.isDisplayingEventCard(6, 6)}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="card"
          >
            <Grid item xs={4}>
              <Card className="event-card">
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
          </CSSTransition>
        </Grid>
        <Grid item>
          <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            activeStep={1}
            nextButton={
              <Button size="small" onClick={() => this.displayNewElement()}>
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={() => this.displayPreviousElement()}
              >
                Back
              </Button>
            }
          />
        </Grid>
      </Grid>
    );
  }
}
