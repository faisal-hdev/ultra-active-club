import "./GymCart.css";
import StaticInfo from "../StaticInfo/StaticInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const GymCart = (props) => {
  // click break time stored here
  const [breakTime, setBreakTime] = useState("0");
  const { userCart } = props;

  let time = 0;
  for (const category of userCart) {
    time = time + category.Time;
  }

  const breakTimes = [10, 20, 30, 40];

  const notify = () => toast("Finished Gymnastics");
  return (
    <div className="cart-container">
      <StaticInfo></StaticInfo>
      <div className="static-info">
        <h4 className="b-title">Add A Break</h4>
        <div className="details-info">
          {breakTimes.map((time) => (
            <div onClick={() => setBreakTime(time)} className="second">
              <h5>
                {time}
                <small>M</small>
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="static-info">
        <h4 className="b-title">Exercise Details</h4>
        <div className="details-infoo">
          <div className="exr-time">
            <h4>Exercise time</h4>
            <p>{time} Seconds</p>
          </div>
          <div style={{ marginTop: 30 }} className="exr-time">
            <h4>Break time</h4>
            <p>{breakTime} Minutes</p>
          </div>
        </div>
      </div>
      <div className="btn-div">
        <button onClick={notify} className="act-btn">
          Activity Completed
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default GymCart;
