import React, { useState, useRef } from "react";
import Icon from "./icon";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TextField from "@mui/material/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ReactTableContainer from "react-table-container";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import UsersTable from "../../components/admin/users/usersTable";
const drawerWidth = 270;

const QUERY_USERS = gql`
  query QUERY_USERS {
    users {
      userId
      userName
      password
      name
      lastName
      email
      status
    }
  }
`;
function ManageUsersPage() {
  const { data, loading, error } = useQuery(QUERY_USERS, {
    pollInterval: 2000,
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
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
        <form className="flex items-center justify-between ... mt-3 ml-3">
          <h2
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 24,
              color: "#303032",
              marginTop: "1vh",
            }}
          >
            สมาชิกทั้งหมด
          </h2>
        </form>

        <Box
          className="bg-white mt-5 "
          style={{ width: "80vw", height: "80vh", borderRadius: 10 }}
        >
          <UsersTable users={data.users}></UsersTable>
        </Box>
      </Box>
    </Box>
  );

  ManageUsersPage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
}
export default ManageUsersPage;
