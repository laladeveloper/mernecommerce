import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PersonIcon from "@material-ui/icons/Person";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { RxDashboard } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { BsPersonUp } from "react-icons/bs";
import { CiCircleList , CiShop } from "react-icons/ci";

// import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const options = [
    { icon: <CiCircleList />, name: "Orders", func: orders },
    { icon: <GoPerson />, name: "Profile", func: account },
    {
      icon: (
        <CiShop
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <BsPersonUp />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <RxDashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    // history.push("/admin/dashboard");
    navigate("/admin/dashboard");
  }
  
  function orders() {
    // history.push("/orders");
    navigate("/orders");
  }
  function account() {
    // history.push("/account");
    navigate("/account");
  }
  function cart() {
    // history.push("/cart");
    navigate("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
