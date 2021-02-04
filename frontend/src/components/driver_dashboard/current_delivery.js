

import React from 'react' 
import CurrentDeliveryItem from './current_delivery_item';
class CurrentDelivery extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchDriverTasks(this.props.currentUser.id);
    }


    render() {

        if(this.props.tasks.length > 0){

        let tasklist = this.props.tasks.map(task => {

            // if(task.status === 'unfinished') {
                return <CurrentDeliveryItem  driverId = {this.props.currentUser.id} completeTask={this.props.completeTask} task = {task} />
            // }
        })
        return(
            <div className="current-delivery-container">

                <h1>Current Delivery</h1>

                {tasklist}  

            </div>
        )
    } else {
        return (

            <h1>This is where your current delivery is located.</h1>
        )
        }
    }
}

export default CurrentDelivery
