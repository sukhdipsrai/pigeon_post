import React from "react";
import "../../stylesheets/dashboard.css";
import MapContainer from "../google_maps/map_container";
class Dashboard extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      show: false,
    };
    this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
  }

  whenFocusOrBlur(e) {
    const newState = !this.state.show;
    this.setState({ show: newState });
  }

  componentWillUnmount() {
    // const GOOGLE_API_KEY = require("../../config/keys").googlekeyS;
    // if (document.getElementById("gapi-import") === null) {
    //   let script = document.createElement("script");
    //   script.id = "gapi-import";
    //   script.type = "text/javascript";
    //   script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    //   document.head.append(script);
    // }
  }

  componentDidMount() {
    if (this.props.currentUser.usertype === "Driver") this.props.fetchTasks();
    else this.props.fetchUserTasks(this.props.currentUser.id);
  }

  render() {
    let data = [];
    let smallData = [];
    try {
      let key = "dropoff_loc";
      if (this.props.currentUser === "Driver") key = "pickup_loc";
      // debugger;
      this.props.tasks.forEach((task, i) => {
        if (task.status !== "Finished")
          data.push({ id: task._id, loc: task[key], status: task.status });
      });
      if (data.length > 5) smallData = data.slice(0, 5);
    } catch {
      data = null;
    }
    // let displayTasks=null;
    // if( data !== null){
    //     displayTasks =
    //         data.map( ele=> <p>{ele.id},{ele.loc},{ele.status}</p>)
    // }
    // debugger;
    return (
      <div className="dashboard-main">
        <div className="dashboard-map">
          <MapContainer data={smallData} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
