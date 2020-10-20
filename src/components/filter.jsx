import React, { Component } from 'react';

import {
    makeStyles,
} from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "../carousal.css";

import PhotographyImage from "../dariusz-sankowski-mj2NwYH3wBA-unsplash.jpg";
import AdventureImage from "../gina-lin-m27OTMegUyA-unsplash.jpg";
import LearningImage from "../green-chameleon-s9CC2SKySJM-unsplash.jpg";
import FitnessImage from "../ibrahim-asad-7s_cg4ZG1Mo-unsplash.jpg";
import FamilyImage from "../james-besser-df80NBQyziU-unsplash.jpg";
import CodingImage from "../alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";

const useStyles = () => makeStyles((theme) => ({
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
        overflowWrap: "break-word",
        fontSize: "13px"
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

class Filter extends Component {
    state = {}
    render() {
        const classes = useStyles();

        return (
            <Swiper
                spaceBetween={32}
                slidesPerView={5}>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>);
    }
}

export default Filter;