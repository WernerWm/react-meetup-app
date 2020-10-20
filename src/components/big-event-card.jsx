import React, { Component } from 'react';
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";
import { Button, Typography, Paper, Grid, Avatar} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { orange } from "@material-ui/core/colors";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Pagination } from 'swiper';

import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "../carousal.css";

import GoogleImage from "../daniel-romero-Z9fW8Nn7D24-unsplash.jpg";

const useStyles = () => makeStyles((theme) => ({
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
    content: {
        width: "95%",
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

class BigEventCard extends Component {
    state = {}
    render() {
        const classes = useStyles();
        const theme = createMuiTheme({
            palette: {
                primary: orange,
            },
        });

        SwiperCore.use([EffectFade, Pagination]);

        return (
            <Swiper id="big-event-card"
                effect="fade"
                slidesPerView={1}
                pagination={{ clickable: true }}>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
                    <Paper className={classes.paper}></Paper>
                </SwiperSlide>
                <SwiperSlide>
                    <Paper className={classes.paper}></Paper>
                </SwiperSlide>
            </Swiper>

        );
    }
}

export default BigEventCard;