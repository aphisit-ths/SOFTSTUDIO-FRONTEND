import React from "react";
import Icon from "./icon";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import DirectionsIcon from "@mui/icons-material/Directions";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArticleIcon from "@mui/icons-material/Article";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupIcon from "@mui/icons-material/Group";
const drawerWidth = 270;

const options = ["Profile", "Log Out"];

function OverviewPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

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
        <div class="ml-1 mb-1">
          <Link to={"/"}>
            <Icon width="160" height="70"></Icon>
          </Link>
        </div>
      </Toolbar>
      <Divider />

      <List>
        {[
          { label: "Dashboard", to: "/overview" },
          { label: "เนื้อหา", to: "/managecontent" },
          { label: "สมาชิก", to: "/manageusers" },
        ].map((text, index) => (
          <Link to={text.to}>
            <ListItem
              button
              key={text}
              style={{ color: index === 0 ? "#F05A28" : "#000" }}
            >
              <ListItemIcon>
                {index - 0 === 0 ? (
                  <GridViewRoundedIcon
                    sx={{ ml: 1 }}
                    style={{ color: "#F05A28" }}
                  />
                ) : (
                  ""
                )}

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
          {" "}
          + register
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

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F6F6F6", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      ></AppBar>
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
        <Toolbar>
          <Box
            component="form"
            sx={{
              p: "2px 4px",
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

          <IconButton sx={{ ml: "40vw", mb: "4vh" }} aria-label="Notification">
            <NotificationsRoundedIcon />
          </IconButton>

          <Button
            variant="outlined"
            sx={{ mb: "4vh" }}
            style={{ marginLeft: 15, borderWidth: 0, color: "#F05A28" }}
            aria-label="Profile"
            startIcon={
              <AccountCircleRoundedIcon style={{ color: "#4F5867" }} />
            }
          >
            Username
          </Button>

          {/* <IconButton sx={{ mr:'8vw',mb:'4vh' }} aria-label="Profile">
        <AccountCircleRoundedIcon />
      </IconButton> */}

          <React.Fragment>
            <ButtonGroup
              variant="contained"
              ref={anchorRef}
              aria-label="split button"
              sx={{ mb: "4vh" }}
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
                  backgroundColor: "#F6F6F6",
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
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            disabled={index === 2}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </React.Fragment>
        </Toolbar>

        <div class="flex items-stretch ...">
          <div>
            <Box
              class="bg-white"
              style={{ width: "17vw", height: "15vh", borderRadius: 10 }}
            >
              <div class="flex items-stretch ...">
                <ArticleIcon
                  size="small"
                  sx={{
                    width: "4vw",
                    height: "7vh",
                    backgroundColor: "#579AFF",
                    color: "#FFFFFF",
                    mt: "4vh",
                    ml: "2vw",
                    borderRadius: 2,
                  }}
                />
                <div class="mt-12">
                  <span
                    class="ml-8"
                    style={{
                      color: "#182524",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: "bolder",
                    }}
                  >
                    500
                  </span>
                  <div>
                    <span class="ml-8" style={{ color: "#6B7373" }}>
                      จำนวนเนื้อหา
                    </span>
                  </div>
                </div>
              </div>
            </Box>
          </div>

          <div>
            <Box
              class="bg-white ml-6 "
              style={{ width: "17vw", height: "15vh", borderRadius: 10 }}
            >
              <div class="flex items-stretch ...">
                <VisibilityIcon
                  size="small"
                  sx={{
                    width: "4vw",
                    height: "7vh",
                    backgroundColor: "#8146FF",
                    color: "#FFFFFF",
                    mt: "4vh",
                    ml: "2vw",
                    borderRadius: 2,
                  }}
                />
                <div class="mt-12">
                  <span
                    class="ml-8"
                    style={{
                      color: "#182524",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: "bolder",
                    }}
                  >
                    104
                  </span>
                  <div>
                    <span class="ml-8" style={{ color: "#6B7373" }}>
                      จำนวนคนเข้าชมวันนี้
                    </span>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div>
            <Box
              class="bg-white ml-6"
              style={{ width: "17vw", height: "15vh", borderRadius: 10 }}
            >
              <div class="flex items-stretch ...">
                <GroupIcon
                  size="small"
                  sx={{
                    width: "4vw",
                    height: "7vh",
                    backgroundColor: "#DB48FF",
                    color: "#FFFFFF",
                    mt: "4vh",
                    ml: "2vw",
                    borderRadius: 2,
                  }}
                />
                <div class="mt-12">
                  <span
                    class="ml-8"
                    style={{
                      color: "#182524",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: "bolder",
                    }}
                  >
                    150
                  </span>
                  <div>
                    <span class="ml-8" style={{ color: "#6B7373" }}>
                      จำนวนสมาชิก
                    </span>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>

        <div class="flex items-stretch ...">
          <Box
            class="bg-white mt-9"
            style={{ width: "50vw", height: "67vh", borderRadius: 10 }}
          ></Box>
          <div>
            <Box
              class="bg-white ml-5 mt-9"
              style={{ width: "35vw", height: "32.5vh", borderRadius: 10 }}
            >
              
                <span
                  class="ml-10 mt-5 font-medium inline-block"
                  style={{ color: "#000", fontStyle: "normal", fontSize: 22 }}
                >
                   ผู้ใช้งานล่าสุด +
                </span>
              

              <div>
                <List>
                
                  {["jandoe@gmail.com", "jandoe@gmail.com", "jandoe@gmail.com", "jandoe@gmail.com","jandoe@gmail.com"].map(
                    (text) => (
                      
                      <ListItem component={Divider} >
                        <ListItemText class="ml-20 mt-1.5" style={{color:"#737B7B",fontSize: 14}} primary={text} />
                        
                      </ListItem>
                    )
                  )}
                </List>
              </div>
            </Box>

            <Box
              class="bg-white mt-4 ml-5"
              style={{ width: "35vw", height: "32.5vh", borderRadius: 10 }}
            >
              <div>
                <span
                  class="ml-10 mt-5 font-medium inline-block"
                  style={{ color: "#000", fontStyle: "normal", fontSize: 22 }}
                >
                  บทความล่าสุด +
                </span>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );

  OverviewPage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
}
export default OverviewPage;
