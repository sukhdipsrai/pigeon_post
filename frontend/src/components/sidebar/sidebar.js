import React from 'react'
import '../../stylesheets/sidebar.css'
class Sidebar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        debugger
        if(this.props.isloggedin){
            return (
                <div className="sidebar">
                <ul className="sidebar-links">

                <li>History</li>
                <li> In Progress </li>
                </ul>
            </div>
        )
    } else {
        return null;
    }
    }
}

export default Sidebar