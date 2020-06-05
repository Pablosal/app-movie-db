import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: "#FBDA44" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none", textAlign: "center" }}>
          <Typography variant="h6" className={classes.title}>
            Los Ultimos Mejores
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
