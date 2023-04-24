import NavBar from "../../components/navBar/NavBar";
import SideBar from "../../components/sideBar/SideBar";
import Widgets from "../../components/widgets/Widgets";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart
            title="Last 6 months revenue"
            aspect={2 / 1}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
