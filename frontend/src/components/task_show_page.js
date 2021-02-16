import React from "react";
import "../stylesheets/task_show.css";
import axios from "axios";

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
      this.props.uploadImage(this.props.tasks).then(window.location.reload());
    });
  };
  componentDidMount() {
    this.props.fetchTask(this.props.taskId);
  }

  render() {
    let imageUpload = null
    
    if(this.props.currentUser.usertype === "Customer") {
      imageUpload = <form className="image-upload" type="form-data" onSubmit={(e) => this.handleImageUpload(e)}>
                        <input type="file" />
                        <button>submit</button>
                    </form>

    }
    // debugger
    if (this.props.tasks !== undefined) {
      return (
        <div className="taskshow-main">          
          <h1>this is the tasks show page</h1>
          <br />

          <div className="task-holder">
            <div className="graphics">
              <div className="image">
              {imageUpload || <img className="task-image" src={this.props.tasks.imageUrl} /> }
              </div>
              <div className="map-holder">map here</div>
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
