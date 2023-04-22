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
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <span className="logo">Auguste</span>
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
          <li>
            <PermIdentityOutlinedIcon className="icon" />{" "}
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryOutlinedIcon className="icon" />{" "}
            <span>Products</span>
          </li>
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
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default SideBar;
