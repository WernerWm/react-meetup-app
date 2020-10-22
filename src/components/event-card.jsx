import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";

function EventCard(props) {
  const { event } = props;

  return (
    <Card raised className="event-card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="GDG Group"
          height="250"
          image={event.GroupImage}
        />
        <CardContent>
          <Typography>{event.GroupName}</Typography>
          <Typography>{event.GroupCategory}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default EventCard;
