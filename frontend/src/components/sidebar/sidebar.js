import React from 'react'
import '../../stylesheets/sidebar.css'
import {Link} from 'react-router-dom'
// import '../../stylesheets/sidebar.css'
class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        debugger
        if(this.props.isloggedin){

            if (this.props.currentUser.usertype === 'Driver'){

                return (
                    <div className="sidebar">
                <ul className="sidebar-links">
                 <Link className="links" to="/dashboard" > <li> Home </li></Link>
                 <Link  className="links" to="/driver/deliveries"><li>  Open Delivieries </li></Link>
                <Link  className="links" to="/driver/currentdelivery"><li>Current Delivery</li></Link>
                <Link  className="links" to="/driver/history"><li>Past Packages</li></Link>
                </ul>
            </div>
        )
            } else {
                return (
                    <div className="sidebar">
                <ul className="sidebar-links">
                <Link className="links"  to="/dashboard" > <li> Home </li></Link>
                <li>Post a Listing</li>
                <Link  className="links" to="/users/delivery/active"><li> In Progress </li></Link>
                <Link  className="links" to="/users/delivery/unclaimed" ><li> Unclaimed </li></Link>
                <Link  className="links" to="/users/delivery/history" ><li>History/Receipts</li></Link>
                </ul>
            </div>
        )
            }
    } else {
        return null;
    }
    }
}

export default Sidebar