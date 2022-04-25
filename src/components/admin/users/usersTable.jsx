import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { tableIcons, tableRef } from "../../../pages/adminpages/ref";
import axios from "axios";
export default function UsersTable({ users }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });
  const rows = users.map((obj) => ({
    ...obj,
  }));
  const columns = [
    { title: "Id", field: "userId", editable: "never" },
    { title: "ชื่อผู้ใช้", field: "userName", editable: "never" },
    { title: "ชื่อ", field: "name", editable: "never" },
    { title: "นามสกุล", field: "lastName", editable: "never" },
    { title: "อีเมล", field: "email", editable: "never" },
    {
      title: "สถานะ",
      field: "status",
      lookup: {
        Banned: "Banned",
        Active: "Active",
        AdminId: "AdminId",
        Cancled: "Cancled",
      },
      render: (row) => (
        <p
          style={{
            fontWeight: 600,
            borderColor: "#F4F4F4",
            color:
              row.status === "Active"
                ? "#56C456"
                : row.status === "Banned"
                ? "#FF3D3D"
                : row.status === "AdminId"
                ? "#8146FF"
                : "#737B7B",
          }}
        >
          {row.status}
        </p>
      ),
      editable: "onUpdate",
    },
  ];

  return (
    <div className="p-12">
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="ผู้ใช้ทั้งหมด"
          data={rows}
          columns={columns}
          tableRef={tableRef}
          icons={tableIcons}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const id = oldData.userId;
                  const status = newData.status;
                  try {
                    const res = axios.put(
                      `https://localhost:5001/api/User/activate_user?userId=${id}&status=${status}`
                    );
                    console.log(res);
                  } catch (err) {
                    console.warn("error", err);
                  }
                  resolve();
                }, 1000);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            rowStyle: {
              backgroundColor: "#ffff",
              margin: 12,
              fontSize: "16px",
              fontWeight: "300",
            },
            headerStyle: {
              backgroundColor: "#f5f5f5",
              fontWeight: "500",
              fontSize: "16px",
              color: "gray",
            },
            searchFieldStyle: {
              backgroundColor: "#f8f8f9",
              borderRadius: 15,
              padding: 6,
            },
          }}
        />
      </MuiThemeProvider>
    </div>
  );
}
