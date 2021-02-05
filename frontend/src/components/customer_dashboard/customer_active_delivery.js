
import React from 'react' 
import '../../stylesheets/customer_active_delivery_container.css'
import ActiveTaskItem from './customer_active_task_item'
class CustomerActiveDelivery extends React.Component {

    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchUserTasks(this.props.currentUser.id)
    }


    render() {

        if(this.props.tasks.length > 0) {

            let activeTasks = this.props.tasks.map(task => {
                if(task.status === 'In Process'){
                    return <ActiveTaskItem task={task} />
                }
            })
            
            return(
                <div className="active-delivery-main">
                <h1>Current Active Deliveries</h1>
                <div className="active-deliveries-holder" >
                    {activeTasks}
                </div>
            </div>
        )
    } else {
        return <h1>This is where your active deliveries will be shown</h1>        ;
    }
    }
}

export default CustomerActiveDelivery