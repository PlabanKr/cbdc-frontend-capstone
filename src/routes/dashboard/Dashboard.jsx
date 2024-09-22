import DashboardComponent from "../../components/main/DashboardComponent/dashboard.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import { FaPowerOff } from "react-icons/fa6";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <button className="dashboard-topbar-connect-wallet">Connect Wallet</button>
          <button className="dashboard-topbar-logout-button"><FaPowerOff /></button>
        </div>
        <div>
          <DashboardComponent />        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
