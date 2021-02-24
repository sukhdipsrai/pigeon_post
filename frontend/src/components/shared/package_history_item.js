import React from "react";
import smallpigeon from "../../images/favicon-32x32.png";

class PackageHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.myfunction = this.myfunction.bind(this);
  }

  myfunction() {
    let more = document.getElementById(this.props.task._id);
    more.classList.toggle("active-main");
    more.classList.toggle("inactive-main");

    // more.style.height = "700px";
    let moreTest = document.getElementById(this.props.task._id + "text");
    moreTest.classList.toggle("active-card");
    moreTest.classList.toggle("inactive-card");
    if (more !== null) {
      //   more.classList.toggle("active");
      //   more.classList.toggle("inactive");
      //   if (more.style.display === "none") {
      //     more.style.display = "block";
      //     more.style.paddingBottom = 300;
      //   } else {
      //     more.style.display = "none";
    }
  }

  render() {
    let dateStart = new Date(this.props.task.date_posted);
    const dateStartAP = dateStart.getHours() >= 12 ? "PM" : "AM";
    let dateFinish = new Date(this.props.task.updatedAt);
    const dateFinishAP = dateFinish.getHours() >= 12 ? "PM" : "AM";
    // debugger;
    return (
      <div
        onClick={() => this.myfunction()}
        id={this.props.task._id}
        className="package-history-item inactive-main"
      >
        {/* <div className="addresses"> */}
        <h2>task id:</h2>
        {this.props.task._id}
        <br />
        <br />
        <h2> pickup: </h2>
        {this.props.task.pickup_loc}
        <br />
        <br />
        <h2>dropoff: </h2>
        {this.props.task.dropoff_loc}
        <br />
        <br />
        <div className="status">
          <img alt="" className="active-small-logo" src={smallpigeon} />
        </div>
        <div className="inactive-card" id={this.props.task._id + "text"}>
          <div id="more">
            <div className="text-div">
              {/* <br/> */}
              {/* <p> */}
              <h2>pigeon id:</h2>
              {this.props.task.driver_id}
              <br />
              <br />
              <h2>mailer id:</h2>
              {this.props.task.customer_id}
              <br />
              <br />
              <h2>distance:</h2>
              {(this.props.task.distance / 1609.0).toFixed(1)} Mi
              <br />
              <br />
              <h2>total weight:</h2> {this.props.task.weight} lbs
              <br />
              <br />
              <h2>payout:</h2> $ {this.props.task.price.toFixed(2)}
              {/* <span>payout</span> */}
              <br />
              <br />
              date posted:{" "}
              {dateStart.getFullYear() +
                "-" +
                (dateStart.getMonth() + 1) +
                "-" +
                dateStart.getDate() +
                " - " +
                (dateStart.getHours() % 12) +
                ":" +
                dateStart.getMinutes() +
                " " +
                dateStartAP}
              <br />
              date completed:{" "}
              {dateFinish.getFullYear() +
                "-" +
                (dateFinish.getMonth() + 1) +
                "-" +
                dateFinish.getDate() +
                " - " +
                (dateFinish.getHours() % 12) +
                ":" +
                dateFinish.getMinutes() +
                " " +
                dateFinishAP}
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PackageHistoryItem;
