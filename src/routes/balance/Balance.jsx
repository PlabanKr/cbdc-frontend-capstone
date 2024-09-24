import Sidebar from "../../components/sidebar/sidebar.component";
import { FaPowerOff } from "react-icons/fa6";

const Balance = () => {
  return (
    <div className="balance-container">
      <Sidebar />
      <div className="balance-container-main">
        <div className="dashboard-topbar">
          <button className="dashboard-topbar-connect-wallet">
            Connect Wallet
          </button>
          <button className="dashboard-topbar-logout-button">
            <FaPowerOff />
          </button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Balance;
