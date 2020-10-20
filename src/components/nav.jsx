import React, { Component } from 'react';

import {
    makeStyles,
} from "@material-ui/core/styles";
import {
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Avatar,
    Link,
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = () => makeStyles((theme) => ({
    grow: {
        flex: "1 1 auto",
    },
    menu: {
        display: "flex",
        boxShadow: "none",
        paddingRight: theme.spacing(3),
    },
    menuItem: {
        paddingRight: theme.spacing(2),
    },
}));

class Nav extends Component {
    state = {}
    render() {
        const classes = useStyles();

        return (
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
        );
    }
}

export default Nav;