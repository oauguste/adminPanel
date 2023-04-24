import "./SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const SideBar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Auguste Store</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link
            to="/users"
            style={{ textDecoration: "none" }}
          >
            <li>
              <PermIdentityOutlinedIcon className="icon" />{" "}
              <span>Users</span>
            </li>
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none" }}
          >
            <li>
              <StoreMallDirectoryOutlinedIcon className="icon" />{" "}
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className="icon" />{" "}
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />{" "}
            <span>Delivery</span>
          </li>
          <p className="title">INFO</p>
          <li>
            <AnalyticsOutlinedIcon className="icon" />{" "}
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />{" "}
            <span>Notification</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <LocalHospitalOutlinedIcon className="icon" />{" "}
            <span>System Health</span>
          </li>
          <li>
            <ContentPasteOutlinedIcon className="icon" />{" "}
            <span>Logs</span>{" "}
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon" />{" "}
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxOutlinedIcon className="icon" />{" "}
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default SideBar;
