import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

const styles = {
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
    padding: 8,
  },
  filterWording: {
    flex: "1 0 auto",
    paddingTop: "1em",
    overflowWrap: "break-word",
    fontSize: "13px",
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
};

function EventCard(props) {
  const { classes, filterOption } = props;

  return (
    <Paper className={[classes.active, classes.filterOption]}>
      <div className={classes.filterImage}>
        <img
          src={filterOption.image}
          alt="something"
          className={classes.filterCircleImage}
        />
      </div>
      <Typography className={classes.filterWording}>
        {filterOption.text}
      </Typography>
    </Paper>
  );
}

export default withStyles(styles)(EventCard);
