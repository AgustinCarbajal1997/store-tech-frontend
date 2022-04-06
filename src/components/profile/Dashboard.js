import React from "react";
import { Link } from "react-router-dom";
import DASHBOARD_ITEMS from "./DashboardItems";
const Dashboard = () => {
  return (
    <div className="dash-board-container">
      {DASHBOARD_ITEMS.map((item, idx) => (
        <div key={idx} className="dash-board-item">
          <div className="dash-board-item__img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="dash-board-item__data">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div>
              <Link to={`/perfil/${item.path}`}>Ir a {item.path} </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
