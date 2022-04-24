import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { tableIcons, tableRef } from "../../../pages/adminpages/ref";
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
    { title: "อีเมล", field: "email", editable: "onUpdate" },
    { title: "สถานะ", field: "status", editable: "onUpdate" },
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
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {}, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const updatedRole = newData.isAdmin === "true";
                  const info = {
                    id: newData.id,
                    isAdmin: updatedRole,
                  };
                  resolve();
                }, 1000);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            rowStyle: {
              backgroundColor: "#ffff",
              margin: 12,
              fontSize: "16em",
              fontWeight: "300",
            },
            headerStyle: {
              backgroundColor: "#f5f5f5",
              fontWeight: "500",
              fontSize: "1.1em",
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
