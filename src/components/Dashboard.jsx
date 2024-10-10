import React from "react";
import "../App.css";

export const UpgradeCard = () => {
  return (
    <div className="upgrade-card">
      <h2>
        Upgrade Your Plan to <span className="premium">Premium</span>
      </h2>
      <p>and Get ultimate Access</p>
      <button className="upgrade-btn">Upgrade Now</button>
    </div>
  );
};

export const StatCard = ({
  icon,
  value,
  label,
  backgroundColor,
  iconBackgroundColor,
  textColor,
}) => {
  return (
    <div className="stat-card" style={{ backgroundColor }}>
      <div
        className="icon-container"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>
      <h3 style={{ color: textColor }}>{value}</h3>
      <p style={{ color: textColor }}>{label}</p>
    </div>
  );
};

export default UpgradeCard;
