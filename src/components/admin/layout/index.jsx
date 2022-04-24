import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Icon from "../../navbar/icon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const drawerWidth = 270;

const options = ["Profile", "Log Out"];

function AdminLayout({ props, children, window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <div className="ml-1 mb-1">
          <Link to={"/"} className="icon">
            <Icon width="160" height="70"></Icon>
          </Link>
        </div>
      </Toolbar>
      <Divider />
      <List>
        {[
          { label: "Dashboard", to: "/admin/overview" },
          { label: "เนื้อหา", to: "/admin/managecontent" },
          { label: "สมาชิก", to: "/admin/manageusers" },
        ].map((text, index) => (
          <Link key={index} to={text.to}>
            <ListItem button key={text}>
              <ListItemIcon>
                {index - 0 === 0 ? <GridViewRoundedIcon sx={{ ml: 1 }} /> : ""}

                {index - 1 === 0 ? <ArticleRoundedIcon sx={{ ml: 1 }} /> : ""}

                {index - 2 === 0 ? <PersonRoundedIcon sx={{ ml: 1 }} /> : ""}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <center className="mt-8">
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: "#F05A28",
            padding: "8px 19px",
            fontSize: "15px",
          }}
          variant="contained"
        >
          <p>+ register</p>
        </Button>
      </center>

      <center>
        <Box
          component="img"
          sx={{
            height: 126,
            width: 250,
            mt: "25vh",
          }}
          src="https://cdn3d.iconscout.com/3d/premium/thumb/man-working-on-laptop-2996955-2493509.png"
        />
      </center>

      <Button
        variant="outlined"
        sx={{ ml: "2vw", mt: "6vh" }}
        style={{ color: "#61677F", borderWidth: 0 }}
        startIcon={<SettingsRoundedIcon style={{ color: "#AFB3BE" }} />}
      >
        ตั้งค่า
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const { user, signout } = useContext(AuthContext);
  return (
    <Box sx={{ display: "flex", backgroundColor: "#F6F6F6", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{ minHeight: 64, height: "8vh" }}
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 0px 10px 10px #F6F6F6 ",
            borderWidth: 0,
          }}
        >
          <Box
            component="form"
            sx={{
              p: "2px 4px",
              mt: "4vh",
              display: "flex",
              alignItems: "center",
              width: 400,
              mb: "4vh",
              borderWidth: 3,
              borderColor: "#CDCFD4",
              borderRadius: 7,
            }}
          >
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#4F5867" }}
              placeholder="ค้นหา"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>

          <IconButton
            sx={{ ml: "40vw", mb: "4vh", mt: "4vh" }}
            aria-label="Notification"
          >
            <NotificationsRoundedIcon />
          </IconButton>

          <Button
            variant="outlined"
            sx={{ mb: "4vh", mt: "4vh" }}
            style={{ marginLeft: 15, borderWidth: 0, color: "#F05A28" }}
            aria-label="Profile"
            startIcon={
              <AccountCircleRoundedIcon style={{ color: "#4F5867" }} />
            }
          >
            {user.userName}
          </Button>

          <>
            <ButtonGroup
              variant="contained"
              ref={anchorRef}
              aria-label="split button"
              sx={{ mb: "4vh", mt: "4vh" }}
              style={{ borderWidth: 0, boxShadow: "none" }}
            >
              <Button
                size="small"
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#94979E",
                  borderRadius: 0,
                  borderWidth: 0,
                  boxShadow: "none",
                  height: 30,
                }}
                elevation={0}
              >
                <KeyboardArrowDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        <MenuItem
                          onClick={() => navigate("/updateinfo/" + user.id)}
                          key={options[0]}
                        >
                          {options[0]}
                        </MenuItem>
                        <MenuItem onClick={() => signout()} key={options[1]}>
                          {options[1]}{" "}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* children component here */}
        {children}
      </Box>
    </Box>
  );
}
export default AdminLayout;
