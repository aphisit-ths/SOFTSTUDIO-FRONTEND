import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { tableIcons, tableRef } from "../../../pages/adminpages/ref";
import Search from "@material-ui/icons/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ContentTable({ contents }) {
  const navigate = useNavigate();
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
  const rows = contents.map((obj) => ({
    ...obj,
  }));
  const columns = [
    { title: "Id", field: "contentId", editable: "never" },
    { title: "หัวเรื่อง", field: "title", editable: "never" },
    { title: "ที่ตั้ง", field: "location", editable: "never" },
    { title: "tag", field: "tag", editable: "never" },
    {
      title: "สถานะ",
      field: "contentStatus",
      editable: "nerver",
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
          actions={[
            {
              icon: "i",
              tooltip: "go to post",
              onClick: (event, rowData) =>
                navigate("/content/" + rowData.contentId),
            },
          ]}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                const id = oldData.contentId;
                setTimeout(() => {
                  try {
                    const res = axios.delete(
                      "https://localhost:5001/api/Contents/DeleteContent",
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                        data: id,
                      }
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
