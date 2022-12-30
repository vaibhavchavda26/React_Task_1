import React from "react";
import logo from "../images/reactimage.jpg";
import "./style.css";
import moment from "moment";

const DeveloperCardView = (props) => {
<<<<<<< HEAD
  let status_message;
  let joining_date = "2020-01-01";
  let join_date = moment(joining_date, "YYYYMMDD").fromNow();
=======
    let status_message 
    let joining_date="2021-01-01"
    let join_date = moment(joining_date, "YYYYMMDD").fromNow();
>>>>>>> b6d57db6d185c2212255a8fbfe994a3e2a2a1d43

  if (props.status) {
    status_message = <div>Online</div>;
  } else {
    status_message = <div>Offline</div>;
  }

  return (
    <div>
      <div className="cardview">
        <div className="img">
          <img src={logo} />
          <br />
        </div>
        <div class="status">
          <h4>{status_message}</h4>
        </div>
        <div className="text">
          <h1>{props.dev_name}</h1>
          <h2>{props.role}</h2>
          <h2>{props.skills}</h2>
          <h2>{join_date}</h2>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCardView;
