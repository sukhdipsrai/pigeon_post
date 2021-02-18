import React from "react";
import "../stylesheets/task_show.css";
import axios from "axios";
import MapContainer from "./google_maps/map_container";

class TaskShowPage extends React.Component {
  constructor(props) {
    // debugger;
    super(props);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }
  handleImageUpload = (event) => {
    // debugger
    const files = event.target[0].files;
    const formData = new FormData();
    formData.append("image", files[0]);

    axios.post("/api/image-upload", formData).then((res) => {
      // debugger
      this.props.tasks.imageUrl = res.data.imageUrl;
      this.props.tasks.api = res.data.api;
      this.props
        .uploadImage(this.props.tasks)
        .then(this.props.fetchTask(this.props.taskId));
    });
  };
  componentDidMount() {
    this.props.fetchTask(this.props.taskId);
    // debugger;
  }

  render() {
    let imageUpload = null;
    let image = null;

    let deleteButton = null;

    try {
      {
        image = <img className="task-image" src={this.props.tasks.imageUrl} />;
      }
    } catch (e) {}

    if (this.props.currentUser.usertype === "Customer") {
      imageUpload = (
        <form
          className="image-upload"
          type="form-data"
          onSubmit={(e) => this.handleImageUpload(e)}
        >
          <input type="file" />
          <button>submit</button>
        </form>
      );

      deleteButton = (
        <div className="delete-button">
          {imageUpload}
          <button
            onClick={() =>
              this.props
                .deleteTask(this.props.tasks._id)
                .then(this.props.history.push("/users/delivery/unclaimed"))
            }
          >
            Delete Task
          </button>
        </div>
      );
    }
    if (this.props.tasks !== undefined) {
      return (
        <div className="taskshow-main">
          <h1>this is the tasks show page</h1>
          <br />

          <div className="task-holder">
            <div className="graphics">
              <div className="image">{image}</div>

              <div className="task-main-map">
                <div className="task-map">
                  <MapContainer />
                </div>
              </div>
            </div>
            <div className="directions">
              <p>total weight: {this.props.tasks.weight} lbs</p>
              <p> from: {this.props.tasks.pickup_loc}</p>
              <p>to: {this.props.tasks.dropoff_loc}</p>
              {/* <p>{this.props.tasks.weight} lbs</p> */}
              <p>total distance: {this.props.tasks.distance}</p>
            </div>
            <div className="price-accept">
              <p>total price: </p>
              <p>$</p>
              <div className="price">
                <h1>{this.props.tasks.price}</h1>
              </div>
            </div>
            {deleteButton}
            {/* <br/> */}
            {/* <br/> */}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TaskShowPage;
