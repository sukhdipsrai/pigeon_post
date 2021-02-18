import React from "react";
import "../../stylesheets/sidebar.css";
import { NavLink } from "react-router-dom";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(modal) {
    let that = this;
    return (e) => {
      e.preventDefault();
      const authorId = that.props.currentUser.id
        ? that.props.currentUser.id
        : null;
      this.props.openModal({ modal: modal, authorId: authorId });
    };
  }
  render() {

    const activeButton = {
            fontWeight: "bold",
            backgroundColor: "maroon",
            opacity: 1
          }

    // debugger
    if (this.props.isloggedin) {
      if (this.props.currentUser.usertype === "Driver") {
        return (
          <div className="sidebar">
            <ul className="sidebar-links">
              <NavLink className="links" to="/dashboard"activeStyle={activeButton}>
                <li> 
                  Dashboard 

                </li>
              </NavLink>
              <NavLink className="links" to="/driver/deliveries" activeStyle={activeButton}>
                <li> Open Delivieries </li>
              </NavLink>
              <NavLink className="links" to="/driver/currentdelivery" activeStyle={activeButton}>
                <li>Current Delivery</li>
              </NavLink>
              <NavLink className="links" to="/driver/history" activeStyle={activeButton}>
                <li>Past Packages</li>
              </NavLink>
            </ul>
          </div>
        );
      } else {
        return (
          <div className="sidebar">
            <ul className="sidebar-links">
              <NavLink className="links" to="/dashboard" activeStyle={activeButton}>
                <li> Dashboard </li>
              </NavLink>
              <NavLink className="links" to="/users/delivery/active" activeStyle={activeButton}>
                <li> In Progress </li>
              </NavLink>
              <NavLink className="links" to="/users/delivery/unclaimed" activeStyle={activeButton}>
                <li> Unclaimed </li>
              </NavLink>
              <NavLink className="links" to="/users/delivery/history" activeStyle={activeButton}>
                <li>History/Receipts</li>
              </NavLink>
              <button
                className="post-delivery"
                onClick={this.handleClick("create-task")}
              >
                Post a Delivery
              </button>
            </ul>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

export default Sidebar;
