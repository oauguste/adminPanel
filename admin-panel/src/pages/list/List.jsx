import "./List.scss";
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navBar/NavBar";
import DataTable from "../../components/datatable/DataTable";
const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
