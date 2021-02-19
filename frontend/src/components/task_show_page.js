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
    debugger

    if(event.target[0].files.length !== 0) {
      
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
    } else {
      alert("Select an image first.")
    }
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
        <div className="image-upload" >

        <form
          // className="image-upload"
          type="form-data"
          onSubmit={(e) => this.handleImageUpload(e)}
          >
          <input className="inputbutton"type="file" />
          <button>Upload Image</button>
        </form>
          </div>
      );

      deleteButton = (
        <div className="delete-button">
          <button
          className="deletebutton"
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
          <h1>Task #{this.props.tasks._id}</h1>
          <br />

          <div className="task-holder">
              <div className="image">{image}</div>
            {/* <div className="graphics"> */}

            {/* </div> */}

            <div className="task-show-info">
              <div className="task-main-map">
                <div className="task-map">
                  <MapContainer />
                </div>
              </div>
          
          <div className="info-section" >

            <div className="directions">
             
                  <h1>
                  from: 
                  </h1>
              <p>{this.props.tasks.pickup_loc}</p>
              <h1>to: </h1>
              <p> {this.props.tasks.dropoff_loc}</p>
              <br/>
              <h1>total distance:</h1>
              <p> {this.props.tasks.distance}</p>
              <h1>total weight: </h1>
                <p>
                  {this.props.tasks.weight} lbs
                  </p>
            </div>
            <div className="price-accept">
              <p>total price: </p>
              <p>$</p>
              <div className="price">
                <h1>{this.props.tasks.price}</h1>
              </div>
            </div>
          </div>
          </div>
            {/* <br/> */}
            {/* <br/> */}
            </div>
            <div className="task-show-buttons" >

            {imageUpload}
            {deleteButton}
            </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TaskShowPage;
