import React from 'react'
import '../stylesheets/task_show.css'
class TaskShowPage extends React.Component {

    componentDidMount(){
        this.props.fetchTask(this.props.taskId)
    }

    render(){
        debugger
        if(this.props.tasks !== undefined) {
            return (
                <div className="taskshow-main">


                <h1>this is the tasks show page</h1>

                <div className="task-holder">
                    <div className="graphics">

                    </div>
                    <div className="directions">
                        {this.props.tasks.weight}
                        {this.props.tasks.pickup_loc}
                        {this.props.tasks.dropoff_loc}
                    </div>
                    <div className="price-accept">

                    </div>
                    
                        {/* <br/> */}
                        {/* <br/> */}

                </div>
            </div>
        )
    } else {
        return null;
    }
    }
}

export default TaskShowPage