import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import {  AiOutlineAppstore , AiOutlineAppstoreAdd } from 'react-icons/ai';
import { LiaListAlt } from "react-icons/lia";
import { BsPeopleFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { MdRateReview } from "react-icons/md";
import { TbLayoutSidebarLeftExpand , TbLayoutSidebarLeftCollapse } from "react-icons/tb";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import PostAddIcon from "@material-ui/icons/PostAdd";
// import AddIcon from "@material-ui/icons/Add";
// import ImportExportIcon from "@material-ui/icons/ImportExport";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
// import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Hanstyle" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <RxDashboard /> Dashboard
        </p>
      </Link>
      <Link>
      {/* <RiExpandRightFill/> */}
        <TreeView
          defaultCollapseIcon={<TbLayoutSidebarLeftCollapse />}
          defaultExpandIcon={<TbLayoutSidebarLeftExpand  size={32} />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<AiOutlineAppstore />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AiOutlineAppstoreAdd />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <LiaListAlt />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <BsPeopleFill /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <MdRateReview />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
