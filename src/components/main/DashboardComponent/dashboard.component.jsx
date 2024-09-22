import ActivitiesCard from "../../card/activities/activities.component";
import WalletInfo from "../../card/walletinfo/walletinfo.component";
import Graph from "../../graph/graph.component";
import "./dashboard.component.style.css";

const DashboardComponent = () => {
  return (
    <div className="dashboard-component-main">
      <div className="dashboard-component-graph">
        <Graph />
      </div>
      <div className="dashboard-component-activities">
        <ActivitiesCard />
        <WalletInfo />
      </div>
    </div>
  );
};

export default DashboardComponent;
