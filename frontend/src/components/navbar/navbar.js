import React from "react";

import "../../stylesheets/navbar.css";
// import logoblack from "../../images/pigeonpostblack.png";
import logowhite from "../../images/pigeonpostwhite.png";

import { Link } from "react-router-dom";
// import '../../stylesheets/navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
    this.handlelogout = this.handlelogout.bind(this);
  }

  whenFocusOrBlur() {
    const newState = !this.state.show;
    this.setState({ show: newState });
  }
  handlelogout() {
    this.props.logout();
    this.setState({ show: false });
  }
  render() {
    const logStatus = this.props.currentUser ? (
      <div className="navbar-loggedin">
        <div className="top">
          <Link to="/dashboard">
            <img alt="" src={logowhite} />
          </Link>

          {/* <h1 className="header-logo">Pigeon Post</h1> */}
        </div>
        <div className="dropdown-holder">
          <h1>Welcome {this.props.currentUser.firstname}</h1>
          <button className="dropdown">
            {this.props.currentUser.firstname} ▼
            <p className="header-button" onClick={this.handlelogout}>
              Log Out
            </p>
          </button>
        </div>
      </div>
    ) : (
      <div className="navbar">
        <div className="top">
          <Link to="/">
            <img src={logowhite} />
          </Link>
        </div>
      </div>
    );
    return <div>{logStatus}</div>;
  }
}
export default Navbar;
