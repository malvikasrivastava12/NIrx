import { CgArrowTopRight } from "react-icons/cg";
import "../App.css";
import { FaUserCircle } from "react-icons/fa";
import User from "../assets/User.png";
import CircularBorder from "../assets/CircularBorder.png";
export const UserCard = () => {
  return (
    <div className="card user">
      {/* <FaUserCircle class="card-img" /> */}
      <div className="image-container">
        <img
          src={CircularBorder}
          alt="User Image"
          className="background-image"
        />
        <img src={User} alt="Border Image" className="overlap-image" />
      </div>

      <center class="card-body">
        <h6 class="card-title">Total Balance</h6>
        <h4 class="card-text">₹ 15,453.058</h4>
        <div className="user-card-bottom">
          <span className="user-card-bottom-content">+12.34%</span>
          <CgArrowTopRight className="user-card-bottom-content" />
        </div>
      </center>
    </div>
  );
};
