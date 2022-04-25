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
    pollInterval: 50000,
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
          <div className="flex align-middle">
            <TextField required id="outlined-required" label="username" />
            <TextField
              required
              id="outlined-required"
              label="password"
              style={{ marginLeft: "1vw" }}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              style={{ marginLeft: "1vw" }}
            />

            <Button
              style={{
                marginLeft: "1vw",
                backgroundColor: "#F05A28",
                color: "#FFF",
                borderRadius: 6,
                width: "7vw",
                boxShadow: " 0px 1px 1px rgba(123, 123, 123, 0.16)",
              }}
            >
              <h2
                style={{ fontWeight: 500, fontSize: 14, fontStyle: "normal" }}
              >
                เพิ่มสมาชิก
              </h2>
            </Button>
          </div>
        </form>

        <Box
          className="bg-white mt-5 "
          style={{ width: "80vw", height: "80vh", borderRadius: 10 }}
        >
          <UsersTable users={data.users}></UsersTable>
          {/* <ReactTableContainer
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
            <TableHead style={{ backgroundColor: "#FAFAFA", borderRadius: 6 }}>
              <TableRow>
                <TableCell>
                  <h2
                    style={{
                      marginLeft: "1vw",
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#737B7B",
                    }}
                  >
                    userId
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
                    ชื่อผู้ใช้
                  </h2>
                </TableCell>
                <TableCell>
                  <h2
                    style={{
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#737B7B",
                      marginLeft: "0.4vw",
                    }}
                  >
                    ชื่อ - นามสกุล
                  </h2>
                </TableCell>
                <TableCell>
                  <h2
                    style={{
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#737B7B",
                      marginLeft: "2vw",
                    }}
                  >
                    อีเมล
                  </h2>
                </TableCell>
                <TableCell>
                  <h2
                    style={{
                      fontWeight: 500,
                      fontSize: 18,
                      color: "#737B7B",
                      marginLeft: "2.75vh",
                    }}
                  >
                    สถานะ
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
              {data.users.map((n) => (
                <TableRow key={n.userId}>
                  <TableCell
                    align="center"
                    style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                  >
                    {n.userId}
                    <h2 style={{ marginLeft: "2vw" }}>{n.ลำดับที่}</h2>
                  </TableCell>
                  <TableCell
                    style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                  >
                    {n.userName}
                  </TableCell>
                  <TableCell
                    style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                  >
                    <p>
                      {n.name} {n.lastName}
                    </p>
                  </TableCell>
                  <TableCell
                    style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                  >
                    <h2 style={{ marginLeft: "1vw" }}></h2>
                    {n.email}
                  </TableCell>

                  <TableCell
                    style={{
                      borderColor: "#F4F4F4",
                      color:
                        n.status === "Active"
                          ? "#56C456"
                          : n.status === "Banned"
                          ? "#FF3D3D"
                          : n.status === "AdminId"
                          ? "#8146FF"
                          : "#737B7B",
                    }}
                  >
                    <h2 style={{ marginLeft: "1.5vw" }}>{n.status}</h2>
                  </TableCell>

                  <TableCell
                    style={{ borderColor: "#F4F4F4", color: "#737B7B" }}
                  >
                    <ListItemIcon>
                      <IconButton
                        onClick={(e) => console.log(n.userId)}
                        sx={{ p: "5px", marginTop: "1vh", marginLeft: "2vw" }}
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
                        sx={{ p: "5px", marginTop: "1vh", marginLeft: "1vw" }}
                      >
                        <PersonOutlineOutlinedIcon
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
                        sx={{ p: "5px", marginTop: "1vh", marginLeft: "1vw" }}
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
        </ReactTableContainer> */}
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
