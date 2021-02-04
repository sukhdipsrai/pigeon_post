import React from 'react'
// import '../../stylesheets/dashboard.css'

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
                <h1>this is the Dashboard</h1>
                
            </div>

        )
    }
}

export default Dashboard