import { VscSettings } from "react-icons/vsc";
import "../App.css";
import { LuBellDot } from "react-icons/lu";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import BellIcon from "../assets/BellIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import Search from "../assets/Search.png";
import User from "../assets/User.png";
import more from "../assets/more.png";
export const Header = ({ Theme }) => {
  return (
    <div className="header">
      <div className="welcome-msg">
        <h4>
          Welcome Back,<b>Sally!</b>
        </h4>
      </div>

      {/* <input
        class="form-control me-4   "
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button> */}

      <div className="search-container">
        <input type="text" placeholder="Search" className="Search"></input>

        <span>
          <img src={BellIcon} alt="BellIcon" className={` icon ${Theme}`} />
          <img src={User} alt="User" className="icon" />
          <img src={more} alt="more" className={` icon ${Theme}`} />
        </span>
      </div>
    </div>
  );
};
