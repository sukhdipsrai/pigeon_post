import React from 'react'


class ActiveTaskItem extends React.Component {

    render(){

        return (

            <div className="active-task-item">
            pigeon id: {this.props.task.driver_id}
            <br/>
            status: {this.props.task.status}
            <br/>
            weight (lb): {this.props.task.weight}
            <br/>
            dropoff: {this.props.task.dropoff_loc}
        </div>
            )
    }

}


export default ActiveTaskItem