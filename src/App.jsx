import "./App.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import UpgradeCard, { StatCard } from "./components/Dashboard";
import { TiShoppingBag } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";
import { BsCassette } from "react-icons/bs";
import { UserCard } from "./components/UserCard";
import { INRxCard } from "./components/INRxCard";
import { Graph } from "./components/Graph";
function App() {
  const [Theme, setTheme] = useState("light");
  const HandleToggle = () => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (Theme === "light") {
      document.body.style.backgroundColor = "rgb(215, 223, 205)";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, [Theme]);
  // const appThemeStyle = {
  //   backgroundColor: Theme === "light" ? "rgb(215, 223, 205)" : "black",
  //   color: Theme === "light" ? "black" : "white",
  //   minHeight: "100vh",
  // };
  return (
    <div className={`app ${Theme}`}>
      <div className="App">
        <Sidebar Theme={Theme} HandleToggle={HandleToggle} />
        <div className="main-content">
          <Header Theme={Theme} />
          <div className="content-section" style={{ display: "flex" }}>
            <div className="left-section">
              <UpgradeCard />
              <div className="stat-card-container">
                <StatCard
                  icon={<BsCassette size={24} />}
                  value="₹15,453"
                  label="Total Assets"
                  backgroundColor="#c0ff8a"
                  iconBackgroundColor="#c0ff8a"
                />
                <StatCard
                  icon={<TiShoppingBag size={24} />}
                  value="₹15,453"
                  label="Total Deposit"
                  backgroundColor="#d6b2ff"
                  iconBackgroundColor="#d6b2ff"
                />
                <StatCard
                  icon={<VscGraph size={24} color="white" />}
                  value="+8.6%"
                  label="APY"
                  backgroundColor="#1b2a33"
                  iconBackgroundColor="#1b2a33"
                  textColor="white"
                />
              </div>
              <div style={{ marginLeft: "4%" }}>
                <Graph Theme={Theme}></Graph>
              </div>
            </div>
            <div className="right-section">
              <UserCard />
              <INRxCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
