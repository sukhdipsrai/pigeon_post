import { connect } from "react-redux"
import React from 'react'
import { test } from '../actions/session_actions'
class Test extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        
        this.props.test();
    }

    render() {
        
        return (
            <div>
                <p>{this.props.testData}</p>
                <p>Hello World, Test</p>
            </div>
        )
    }
}

const mstp = (state, ownProps) => {

    return {
        testData: state.session.msg
    }
}

const mdtp = dispatch => {
    return {
        test: () => dispatch(test())
    }
}

export default connect(mstp, mdtp)(Test);