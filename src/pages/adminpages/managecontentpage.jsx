import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Icon from "./icon";
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
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ContentTable from "../../components/admin/content/contentTable";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
const GET_CONTNETS = gql`
  query GET_CONTNETS {
    contents {
      contentId
      title
      description
      location
      imageURL
      tag
      contentStatus
      commentList {
        commentId
        user {
          password
          userId
          userName
          name
        }
        description
        date
        commentStatus
      }
    }
  }
`;

let id = 0;
function createData(หัวข้อ, เวลา, วันที่, จำนวนไลค์, idx, ตัวเลือก) {
  id += 1;
  return { หัวข้อ, เวลา, วันที่, จำนวนไลค์, idx, ตัวเลือก };
}

let data = [
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "0"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "1"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "2"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "3"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "4"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "5"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "6"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "7"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "8"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "9"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "10"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "11"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "12"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "13"
  ),
  createData(
    "วัดพระศรีรัตนมหาธาตุฯ (วัดใหญ่)",
    "09:00",
    "28 May 2021",
    200,
    "14"
  ),
];

const drawerWidth = 270;

const options = ["Profile", "Log Out"];

function ManageContentPage() {
  const { data, loading, error } = useQuery(GET_CONTNETS, {
    pollInterval: 2000,
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>error : {console.log(error)}</p>;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F6F6F6", height: "100vh" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div className="flex items-stretch ... mt-3 ml-3">
          <p
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 24,
              color: "#303032",
            }}
          >
            เนื้อหาทั้งหมด
          </p>

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
            <Link
              to={"/admin/addcontent"}
              style={{ fontWeight: 500, fontSize: 14, fontStyle: "normal" }}
            >
              เพิ่มเนื้อหา
            </Link>
          </Button>
        </div>
        {loading ? "loading" : <ContentTable contents={data.contents} />}

        {/* <Box
          className="bg-white mt-5 "
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
                    <h2
                      style={{
                        marginLeft: "4vw",
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      หัวข้อ
                    </h2>
                  </TableCell>
                  <TableCell>
                    <h2
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      เวลา
                    </h2>
                  </TableCell>
                  <TableCell>
                    <h2
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      วันที่
                    </h2>
                  </TableCell>
                  <TableCell>
                    <h2
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                      }}
                    >
                      จำนวนไลค์
                    </h2>
                  </TableCell>
                  <TableCell>
                    <h2
                      style={{
                        fontWeight: 500,
                        fontSize: 18,
                        color: "#737B7B",
                        marginLeft: "8vh",
                      }}
                    >
                      ตัวเลือก
                    </h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((n, i) => (
                  <TableRow key={n.id}>
                    <TableCell
                      style={{
                        borderColor: "#F4F4F4",
                        color: "#737B7B",
                        width: "20vw",
                      }}
                    >
                      {" "}
                      <h2 style={{ marginLeft: "2.75vw" }}>{n.หัวข้อ}</h2>
                    </TableCell>
                    <TableCell
                      style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                    >
                      {n.เวลา}
                    </TableCell>
                    <TableCell
                      style={{
                        borderColor: "#F4F4F4",
                        color: "#737B7B",
                        width: "11vw",
                      }}
                    >
                      {n.วันที่}
                    </TableCell>
                    <TableCell
                      style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                    >
                      <h2 style={{ marginLeft: "1.5vw" }}></h2>
                      {n.จำนวนไลค์}
                    </TableCell>
                    <TableCell
                      style={{
                        borderColor: "#F4F4F4",
                        color: "#737B7B",
                        width: "20vw",
                      }}
                    >
                      <ListItemIcon>
                        <IconButton
                          type="submit"
                          sx={{ p: "5px", marginTop: "1vh", marginLeft: "1vw" }}
                        >
                          <ModeEditOutlineOutlinedIcon
                            style={{
                              color: "#F05A28",
                              borderColor: "#F2F2F2",
                              borderWidth: 1,
                              borderRadius: 9,
                              transform: "scale(1.5)",
                              padding: "3.3",
                            }}
                          />
                        </IconButton>
                      </ListItemIcon>

                      <ListItemIcon>
                        <IconButton
                          type="submit"
                          sx={{
                            p: "5px",
                            marginTop: "1vh",
                            marginLeft: "5.5vw",
                          }}
                        >
                          <DeleteOutlinedIcon
                            style={{
                              color: "#F26E6E",
                              borderColor: "#F2F2F2",
                              borderWidth: 1,
                              borderRadius: 9,
                              transform: "scale(1.5)",
                              padding: "3.3",
                            }}
                          />
                        </IconButton>
                      </ListItemIcon>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ReactTableContainer>
        </Box> */}
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
