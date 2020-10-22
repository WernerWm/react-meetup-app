import React from "react";

import { Grid, Typography, Tabs, Tab } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";

import EventCard from "./event-card";

import GoogleImage from "../daniel-romero-Z9fW8Nn7D24-unsplash.jpg";
import IBMImage from "../sam-pak-nwlFMVePZhI-unsplash.jpg";
import ReactImage from "../ferenc-almasi-L8KQIPCODV8-unsplash.jpg";

function DiscoverSection() {
  const [value, setValue] = React.useState(0);
  const discoverEvents = [
    {
      GroupImage: GoogleImage,
      GroupName: "GDG Group",
      GroupCategory: "Coding and development",
    },
    {
      GroupImage: IBMImage,
      GroupName: "GDG Group",
      GroupCategory: "Coding and development",
    },
    {
      GroupImage: ReactImage,
      GroupName: "GDG Group",
      GroupCategory: "Coding and development",
    },
    {
      GroupImage: ReactImage,
      GroupName: "GDG Group",
      GroupCategory: "Coding and development",
    },
    {
      GroupImage: ReactImage,
      GroupName: "GDG Group",
      GroupCategory: "Coding and development",
    },
    {
      GroupImage: ReactImage,
      GroupName: "GDG Group",
      GroupCategory: "Coding and development",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
        <Swiper
          className="discover-swiper-container"
          spaceBetween={30}
          slidesPerView={3}
        >
          {discoverEvents.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard event={event}></EventCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default DiscoverSection;
