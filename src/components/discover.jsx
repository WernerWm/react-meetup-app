import React, { Component } from 'react';

import { Typography, Card, CardContent, CardActionArea, CardMedia } from "@material-ui/core";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "../carousal.css";

import GoogleImage from "../daniel-romero-Z9fW8Nn7D24-unsplash.jpg";
import IBMImage from "../sam-pak-nwlFMVePZhI-unsplash.jpg";
import ReactImage from "../ferenc-almasi-L8KQIPCODV8-unsplash.jpg";

class Discover extends Component {
    state = {}
    render() {
        return (
            <Swiper
                className="discover-swiper-container"
                spaceBetween={30}
                slidesPerView={3}
            >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>);
    }
}

export default Discover;