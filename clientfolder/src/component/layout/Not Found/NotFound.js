import React from "react";
import "./NotFound.css";
// import ErrorIcon from "@material-ui/icons/Error";
import { MdOutlineErrorOutline } from "react-icons/md";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="NotFound">
      <MdOutlineErrorOutline />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PageNotFound ;
