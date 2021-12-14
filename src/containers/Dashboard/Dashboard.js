import React from "react";
import Services from "../../components/Service/Services";

import "./styles.scss";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">Dashboard</div>
      <h1>Welcome</h1>
      <Services />
    </div>
  );
};

export default Dashboard;
