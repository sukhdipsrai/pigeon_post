import React from 'react'
import '../../stylesheets/dashboard.css'

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
            <div>
                <h1>this is the Dashboard</h1>
                <div className="dropdown">
                    <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>{this.props.currentUser.email}▼ {this.state.show ? <a className="header-button" onClick={this.props.logout}>Log Out</a> : null}</button>
                </div>
            </div>

        )
    }
}

export default Dashboard