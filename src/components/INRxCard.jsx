import "../App.css";
import LogoBlack from "../assets/LogoBlack.png";
import { MdCurrencyRupee } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "../assets/LogoSideBar.png";
export const INRxCard = () => {
  return (
    <div className="card" style={{ marginTop: "20%" }}>
      <div className="INRX-card">
        <div class="card-body">
          <div className="Inrx-btn-group">
            <span> Buy</span>
            <span> Sell</span>
            <span> Exchange</span>
          </div>

          <div className="INRx-card-title">Coin</div>

          <div className="coin-container">
            <img src={Logo} alt="" className="icon-inrx" />
            <span>INRx</span>
            <RiArrowDropDownLine style={{ fontSize: "25px" }} />
          </div>

          <div className="INRx-card-title">Amount</div>
          <div className="amount-container">
            <span>₹ 1,324.00</span>
            <MdCurrencyRupee />
          </div>
          <div className="Total">
            <span className="INRx-card-title">Total :</span>
            <span className="INRx-card-title" style={{ fontWeight: "bold" }}>
              ₹ 1,324.00
            </span>
          </div>
          <button className="Inrx-btn" type="button">
            <img src={LogoBlack} alt="" className="icon-inrx" />
            Buy INRx
          </button>
        </div>
      </div>
    </div>
  );
};
