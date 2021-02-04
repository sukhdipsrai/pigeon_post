import React from 'react'
import '../../stylesheets/sidebar.css'
import {Link} from 'react-router-dom'
class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }
    handleClick(modal) {
        let that = this;
        return e => {
            e.preventDefault();
            const authorId = that.props.currentUser.id ? that.props.currentUser.id : null;
            this.props.openModal({ modal: modal, authorId: authorId})
        }
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
                        <button className='post-delivery' onClick={this.handleClick('create-task')}>Post a Delivery</button>
    
                <ul className="sidebar-links">
                <Link to="/dashboard" > <li> Home </li></Link>
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