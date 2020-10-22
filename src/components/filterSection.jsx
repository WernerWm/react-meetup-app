import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";

import FilterOption from "./filter-option";

import PhotographyImage from "../dariusz-sankowski-mj2NwYH3wBA-unsplash.jpg";
import AdventureImage from "../gina-lin-m27OTMegUyA-unsplash.jpg";
import LearningImage from "../green-chameleon-s9CC2SKySJM-unsplash.jpg";
import FitnessImage from "../ibrahim-asad-7s_cg4ZG1Mo-unsplash.jpg";
import FamilyImage from "../james-besser-df80NBQyziU-unsplash.jpg";
import CodingImage from "../alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";

function FilterSection(props) {
  const filterOptions = [
    { image: PhotographyImage, text: "Photography" },
    { image: AdventureImage, text: "Adventure" },
    { image: LearningImage, text: "Learning" },
    { image: FitnessImage, text: "Fitness" },
    { image: FamilyImage, text: "Family" },
    { image: CodingImage, text: "Coding" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Type of Events</Typography>
      </Grid>
      <Grid item xs={12}>
        <Swiper spaceBetween={32} slidesPerView={5}>
          {filterOptions.map((filterOption, index) => (
            <SwiperSlide key={index}>
              <FilterOption filterOption={filterOption}></FilterOption>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default FilterSection;
