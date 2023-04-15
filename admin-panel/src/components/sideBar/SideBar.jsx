import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <span className="logo">Auguste</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className="bottom">Color</div>
    </div>
  );
};

export default SideBar;
