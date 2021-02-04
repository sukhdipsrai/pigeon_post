
import React from 'react' 
import DeliveryIndexItem from './delivery_task_index_item'
import '../../stylesheets/driver_delivery_index.css'


class DeliveryTasksIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchTasks();
    }


    render() {
        // debugger
        if(this.props.tasks.length > 0){

            let tasklist = this.props.tasks.map(task => {

                // if(task.status === 'unfinished') {
                    return <DeliveryIndexItem  driverId = {this.props.currentUser.id} claimTask={this.props.claimTask} task = {task} />
                // }
            })

            return (
                    <div className="active-delivery-main">
                        <h1>This is where all active deliveries will be available to choose from.</h1>
                           <h2></h2>
                            <div className="inner-delivery-main">
                                {tasklist.reverse()}  
                            </div>
                    </div>
            )
        } else {
        return null;
    }
    }
}

export default DeliveryTasksIndex
