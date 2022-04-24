import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const iconstyle = {
  color: "#F05A28",
  borderColor: "#F2F2F2",
  borderWidth: 1,
  borderRadius: 9,
  transform: "scale(1.5)",
  padding: "3.3",
};
export const tableIcons = {
  Add: forwardRef((props, ref) => (
    <AddBox style={iconstyle} {...props} ref={ref} />
  )),
  Check: forwardRef((props, ref) => (
    <Check style={iconstyle} {...props} ref={ref} />
  )),
  Clear: forwardRef((props, ref) => (
    <Clear style={iconstyle} {...props} ref={ref} />
  )),
  Delete: forwardRef((props, ref) => (
    <DeleteOutline style={iconstyle} {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight style={iconstyle} {...props} ref={ref} />
  )),

  Edit: forwardRef((props, ref) => (
    <ModeEditOutlineOutlinedIcon style={iconstyle} {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => (
    <SaveAlt style={iconstyle} {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref) => (
    <FilterList style={iconstyle} {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref) => (
    <FirstPage style={iconstyle} {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref) => (
    <LastPage style={iconstyle} {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref) => (
    <ChevronRight style={iconstyle} {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft style={iconstyle} {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => (
    <Clear style={iconstyle} {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => (
    <Search style={iconstyle} {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => (
    <ArrowDownward style={iconstyle} {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref) => (
    <Remove style={iconstyle} {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref) => (
    <ViewColumn style={iconstyle} {...props} ref={ref} />
  )),
};
export const tableRef = React.createRef();
