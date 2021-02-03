import React from 'react'
import '../../stylesheets/sidebar.css'
import {Link} from 'react-router-dom'
class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        debugger
        if(this.props.isloggedin){

            if (true){

                return (
                    <div className="sidebar">
                <ul className="sidebar-links">
                 <Link to="/dashboard" > <li> Home </li></Link>
                 <Link to="/driver/deliveries"><li>  Make a Delivery </li></Link>
                <Link to="/driver/currentdelivery"><li>Current Delivery</li></Link>
                <Link to="/driver/history"><li>Past Packages</li></Link>
                </ul>
            </div>
        )
            } else {
                return (
                    <div className="sidebar">
                <ul className="sidebar-links">
                <Link to="/dashboard" > <li> Home </li></Link>
                <li>Post a Listing</li>
                <Link to="/users/delivery/active"><li> In Progress </li></Link>
                <Link to="/users/delivery/unclaimed" ><li> Unclaimed </li></Link>
                <Link to="/users/delivery/history" ><li>History/Receipts</li></Link>
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