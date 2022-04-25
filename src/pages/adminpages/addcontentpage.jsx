import React, { useState } from "react";
import Icon from "./icon";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
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
import TextField from "@mui/material/TextField";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ReactTableContainer from "react-table-container";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const ADD_CONTENT = gql`
  mutation create_content(
    $title: String!
    $description: String!
    $location: String!
    $imageUrl: String!
    $tag: [String]!
  ) {
    create_content(
      title: $title
      description: $description
      location: $location
      imageURL: $imageUrl
      tag: $tag
    ) {
      contentId
      title
      description
      location
      imageURL
      tag
    }
  }
`;
const useStyles = makeStyles(() => ({
  textField: {
    marginTop: "2vh",
    marginLeft: "2vw",
    width: "85%",
    fontWeight: 500,
    borderRadius: "10",
    height: "200",
    fontFamily: "Inter",
  },

  textFieldLarge: {
    width: "100%",
    height: "100%",
    fontWeight: 500,
    borderRadius: "10",
    height: "200",
    fontFamily: "Inter",
  },

  input: {
    display: "none",
  },
}));

const drawerWidth = 270;

const options = ["Profile", "Log Out"];

function AddContentPage(props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const classes = useStyles();
  const { window } = props;
  const [imageSelected, setImageSelected] = useState("");
  const [imageFileName, setImageFileName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [create_content, { loading, error }] = useMutation(ADD_CONTENT, {
    onCompleted: (data) => {
      if (data) {
        console.log("add content sucessfull ===>");
      }
    },
  });

  function uploadImage() {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "g7ppyzgx");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dyleexsre/image/upload",
      formData
    ).then((Response) => {
      setImgUrl(Response.data.url);
      console.log("setted =>");
    });
  }
  const onSubmit = async (info) => {
    try {
      const tags = info.tag.split(",");
      const newInfo = await {
        ...info,
        imageUrl: imgUrl,
        tag: tags,
      };
      await create_content({ variables: newInfo });
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "#F6F6F6", height: "90vh" }}>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <div className="flex justify-between ... ml-3">
            <h2
              style={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 24,
                color: "#303032",
              }}
            >
              เพิ่มเนื้อหาใหม่
            </h2>
            <div>
              <Link to={"/admin/managecontent"}>
                <Button style={{}}>
                  <h2 style={{ color: "#A9A5A5" }}>ย้อนกลับ</h2>
                </Button>
              </Link>
              <Button
                style={{
                  marginLeft: "1vw",
                  backgroundColor: "#56C456",
                  color: "#FFF",
                  borderRadius: 6,
                  width: "7vw",
                  boxShadow: " 0px 1px 1px rgba(123, 123, 123, 0.16)",
                }}
                onClick={uploadImage}
              >
                <button
                  type="submit"
                  style={{ fontWeight: 500, fontSize: 14, fontStyle: "normal" }}
                >
                  เผยแพร่เนื้อหา
                </button>
              </Button>
            </div>
          </div>

          <Box
            className="bg-white mt-5 "
            style={{ width: "80vw", height: "20vh", borderRadius: 10 }}
          >
            <TextField
              required
              id="outlined-required"
              label="เพิ่มหัวเรื่อง"
              className={classes.textField}
              {...register("title", {
                required: true,
                minLength: 3,
                maxLength: 300,
              })}
              sx={{
                "& label": {
                  color: "#000000",
                  fontWeight: 1000,
                  fontSize: 20,
                  fontFamily: "Inter",
                },
                marginTop: "2vh",
                marginLeft: "2vw",
              }}
              inputProps={{
                style: { color: "#000000", fontWeight: 1000, fontSize: 20 },
              }}
            ></TextField>

            <TextField
              required
              id="outlined-required"
              label="หมวดหมู่ : เช่น เที่ยววัด , เที่ยวเชียงไหม่ , เที่ยวไกล้ กทม. (ใช้ , แบ่ง)"
              className={classes.textField}
              {...register("tag", {
                required: true,
                minLength: 3,
                maxLength: 200,
              })}
              sx={{
                "& label": {
                  color: "#303032",
                  fontWeight: 300,
                  fontSize: 16,
                },
                marginTop: "2vh",
                marginLeft: "2vw",
              }}
              inputProps={{
                style: { color: "#757575", fontWeight: 300, fontSize: 16 },
              }}
            ></TextField>
          </Box>

          <Box
            className="bg-white mt-5 "
            style={{ width: "80vw", height: "57vh", borderRadius: 10 }}
          >
            <div className="flex items-stretch ... ml-3">
              <div>
                <Box
                  className="bg-white mt-5 ml-5 "
                  style={{
                    width: "35vw",
                    height: "45vh",
                    borderRadius: 14,
                    borderWidth: 1,
                    border: "1px dashed #B1B1B1",
                  }}
                >
                  <div
                    className="imgiconuplod"
                    style={{ marginTop: "15vh", marginLeft: "14.5vw" }}
                  >
                    <div className="image-upload" style={{ cursor: "pointer" }}>
                      <label htmlFor="file-input">
                        <img
                          alt="nothing"
                          style={{ width: "100", height: "auto" }}
                          src="https://www.img.in.th/images/b143ba1e67a64ce11004cafd58e24a8c.png"
                        />
                      </label>

                      <input
                        style={{ display: "none" }}
                        id="file-input"
                        type="file"
                        onChange={(event) => {
                          setImageSelected(event.target.files[0]);
                          uploadImage();
                          // setImageFileName(event.target.files[])
                        }}
                      />

                      <div className="content-center">
                        <h2 style={{ fontSize: 20, fontWeight: 400 }}>
                          {imageSelected.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </Box>

                <TextField
                  {...register("location", {
                    required: true,
                    minLength: 3,
                    maxLength: 300,
                  })}
                  id="outlined-required"
                  label="ที่ตั้ง :"
                  className={classes.textField}
                  sx={{
                    "& label": {
                      color: "#303032",
                      fontWeight: 500,
                      fontSize: 16,
                      fontFamily: "Inter",
                    },
                    marginTop: "2vh",
                    marginLeft: "1vw",
                    width: "97%",
                  }}
                  inputProps={{
                    style: { color: "#303032", fontWeight: 500, fontSize: 16 },
                  }}
                ></TextField>
              </div>

              <Box
                className="bg-white mt-5 ml-10 "
                style={{
                  width: "40vw",
                  height: "53vh",
                  borderRadius: 10,
                  borderWidth: 0,
                }}
              >
                <TextField
                  {...register("description", {
                    required: true,
                    minLength: 10,
                    maxLength: 300,
                  })}
                  className={classes.textFieldLarge}
                  id="outlined-multiline-static"
                  label="เพิ่มคำอธิบาย"
                  multiline
                  rows={23}
                  defaultValue=""
                />
              </Box>
            </div>
          </Box>
        </Box>
      </form>
    </Box>
  );

  AddContentPage.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
}
export default AddContentPage;
