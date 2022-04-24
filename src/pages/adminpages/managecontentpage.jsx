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
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ReactTableContainer from "react-table-container";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
let styles = (theme) => ({
  root: {
    display: "inline-block",
  },
  table: {
    backgroundColor: "#ffffff",
  },
});

let id = 0;
function createData(หัวข้อ, เวลา, วันที่, จำนวนไลค์, ตัวเลือก) {
  id += 1;
  return { หัวข้อ, เวลา, วันที่, จำนวนไลค์, ตัวเลือก };
}

let data = [
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
  createData("วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)", "09:00", "28 May 2021", 200),
];

const drawerWidth = 270;

const options = ["Profile", "Log Out"];

function ManageContentPage(props) {
  const { classes } = props;
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
          <Link to={"/"} className="icon">
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
              style={{ color: index === 1 ? "#F05A28" : "#000" }}
            >
              <ListItemIcon>
                {index - 0 === 0 ? <GridViewRoundedIcon sx={{ ml: 1 }} /> : ""}

                {index - 1 === 0 ? (
                  <ArticleRoundedIcon
                    sx={{ ml: 1 }}
                    style={{ color: "#F05A28" }}
                  />
                ) : (
                  ""
                )}

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
          <h>+ register</h>
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
      >
        <Toolbar
          variant="temporary"
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
        <Toolbar></Toolbar>

        <div class="flex items-stretch ... mt-3 ml-3">
          <h
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 24,
              color: "#303032",
            }}
          >
            เนื้อหาทั้งหมด
          </h>
          <Link to={"/addcontent"} >
          <Button
            style={{
              marginLeft: "65vw",
              backgroundColor: "#F05A28",
              color: "#FFF",
              borderRadius: 6,
              width: "7vw",
              boxShadow: " 0px 1px 1px rgba(123, 123, 123, 0.16)",
            }}
          >
            <h style={{ fontWeight: 500, fontSize: 14, fontStyle: "normal" }}>
              เพิ่มเนื้อหา
            </h>
          </Button>
          </Link>
        </div>

        <Box
          class="bg-white mt-5 "
          style={{ width: "80vw", height: "80vh", borderRadius: 10 }}
        >
          <ReactTableContainer
            style={{
              // Removes `inline-block` space between <Paper> and <ReactTableContainer>
              marginBottom: "-4px",
              marginTop: "4vh",
              marginLeft: "2.75vw",
            }}
            width="75vw"
            height="73vh"
            customHeader={[TableHead]}
          >
            <Table>
              <TableHead
                style={{ backgroundColor: "#FAFAFA", borderRadius: 6 }}
              >
                <TableRow>
                  <TableCell>
                    <h
                      style={{
                        marginLeft: "4vw",
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      หัวข้อ
                    </h>
                  </TableCell>
                  <TableCell>
                    <h
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      เวลา
                    </h>
                  </TableCell>
                  <TableCell>
                    <h
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      วันที่
                    </h>
                  </TableCell>
                  <TableCell>
                    <h
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      จำนวนไลค์
                    </h>
                  </TableCell>
                  <TableCell>
                    <h
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                        marginLeft:"8vh"
                      }}
                    >
                      ตัวเลือก
                    </h>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((n) => (
                  <TableRow key={n.id}>
                    <TableCell
                      style={{ borderColor: "#F4F4F4", color: "#737B7B",width:'20vw' }}
                    >
                      {" "}
                      <h style={{ marginLeft: "2.75vw" }}>{n.หัวข้อ}</h>
                    </TableCell>
                    <TableCell
                      style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                    >
                      {n.เวลา}
                    </TableCell>
                    <TableCell
                      style={{ borderColor: "#F4F4F4", color: "#737B7B",width:'11vw' }}
                    >
                      {n.วันที่}
                    </TableCell>
                    <TableCell
                      style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                    >
                      <h style={{ marginLeft: "1.5vw" }}></h>
                      {n.จำนวนไลค์}
                    </TableCell>
                    <TableCell
                      style={{ borderColor: "#F4F4F4", color: "#737B7B" ,width:'20vw'}}
                    >
                      <ListItemIcon>
                      <IconButton
                        type="submit"
                        sx={{ p: "5px",marginTop:'1vh',marginLeft:'1vw'}}
                      >
                        <ModeEditOutlineOutlinedIcon  style={{color: "#F05A28",borderColor:"#F2F2F2",borderWidth:1,borderRadius:9,transform:"scale(1.5)",padding:'3.3' }} />
                      </IconButton>
                    </ListItemIcon>

                    <ListItemIcon>
                      <IconButton
                        type="submit"
                        sx={{ p: "5px",marginTop:'1vh',marginLeft:'5.5vw'}}
                      >
                        <DeleteOutlinedIcon  style={{color: "#F26E6E",borderColor:"#F2F2F2",borderWidth:1,borderRadius:9,transform:"scale(1.5)",padding:'3.3' }} />
                      </IconButton>
                    </ListItemIcon>
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ReactTableContainer>
        </Box>
      </Box>
    </Box>
  );

  ManageContentPage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
}
export default ManageContentPage;
