import React, { useEffect, useState } from "react";
import "../App.css";
import Logo from "../assets/LogoSideBar.png";
import INRx from "../assets/INRx.png";
import Overview from "../assets/Overview.png";
import Asstes from "../assets/Asstes.png";
import Activity from "../assets/Activity.png";

import Deposite from "../assets/Deposite.png";
import Withdraw from "../assets/Withdraw.png";
import Earn from "../assets/Earn.png";
import Support from "../assets/Support.png";
import Setting from "../assets/Setting.png";
import nightmode from "../assets/nightmode.png";
import Toggle from "../assets/Toggle.png";
import logout from "../assets/logout.png";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
const Sidebar = ({ Theme, HandleToggle }) => {
  return (
    <div className="sidebar">
      {/* <div className="logo">INRx</div> */}
      <div className="sidebar-icon-container">
        <img src={Logo} alt="Logo" className="Logo" />
        <img
          src={INRx}
          alt="INRx"
          className={`Logo ${Theme}`}
          style={{ backgroundColor: "transparent" }}
        />
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="fs-6 fw-bold">
            <img src={Overview} alt="" className={` icon ${Theme}`} />
            Overview
          </li>
          <li className="fs-6 fw-bold">
            <img src={Asstes} alt="" className={` icon ${Theme}`} />
            Assets
          </li>
          <li className="fs-6 fw-bold">
            <img src={Activity} alt="" className={` icon ${Theme}`} />
            Activity
          </li>
          <li className="fs-6 fw-bold">
            <img src={Deposite} alt="" className={` icon ${Theme}`} />
            Deposit
          </li>
          <li className="fs-6 fw-bold">
            <img src={Withdraw} alt="" className={` icon ${Theme}`} />
            Withdraw
          </li>
          <li className="fs-6 fw-bold" style={{ paddingBottom: "75%" }}>
            <img src={Earn} alt="" className={` icon ${Theme}`} />
            Earn
          </li>
          <div>
            <li className="fs-6 fw-bold">
              <img src={Support} alt="" className={` icon ${Theme}`} />
              Support
            </li>
            <li className="fs-6 fw-bold" style={{ paddingBottom: "35%" }}>
              <img src={Setting} alt="" className={` icon ${Theme}`} />
              Setting
            </li>
            <li className="fs-6 fw-bold" style={{ display: "flex" }}>
              {Theme === "light" ? (
                <img src={nightmode} alt="" className={` icon ${Theme}`} />
              ) : (
                <MdOutlineWbSunny className={`sun-icon ${Theme}`} />
              )}

              <div class="form-check form-switch">
                <input
                  onClick={HandleToggle}
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              {/* <button onClick={HandleToggle}>
                Switch to {Theme === "light" ? "Dark" : "Light"} Mode
              </button> */}
              {/* <img src={Toggle} alt="" className="icon" /> */}
              {/* <FaRegMoon className="icon" />
              <IoToggleOutline style={{ width: "40px" }} /> */}
            </li>
            <li className="fs-6 fw-bold">
              <img src={logout} alt="" className={` icon ${Theme}`} />
              <span> Logout</span>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
