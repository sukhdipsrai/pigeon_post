import React from 'react'
// import '../../stylesheets/dashboard.css'
import MapContainer from "../google_maps/map_container"
class Dashboard extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = {
            show: false
        }
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
    }

    whenFocusOrBlur(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }

    render() {
        // debugger

        return (
            <div className="dashboard-main">
                <div className="dashboard-map">
                    <MapContainer />
                </div>
            </div>

        )
    }
}

export default Dashboard