import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  grow: {
    flex: "1 1 auto",
  },
  menu: {
    display: "flex",
    boxShadow: "none",
    paddingRight: 24,
  },
  menuItem: {
    paddingRight: 24,
  },
};

function Nav(props) {
  const { classes } = props;

  return (
    <AppBar
      classes={{ root: classes.menu }}
      position="relative"
      color="transparent"
    >
      <Toolbar disableGutters>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
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
  );
}

export default withStyles(styles)(Nav);
