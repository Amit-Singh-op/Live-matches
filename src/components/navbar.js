import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu"

const Nav=()=>{

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                <MenuIcon/>
                </IconButton>
                <Typography variant="h6"> Live Score</Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Nav;