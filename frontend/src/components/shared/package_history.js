import React from 'react'
import PackageHistoryItem from './package_history_item'
import '../../stylesheets/history_container.css'

class PackageHistory extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.currentUser.usertype === 'Driver'){
                
            this.props.fetchDriverTasks(this.props.currentUser.id)
        } else {
            this.props.fetchCustomerTasks(this.props.currentUser.id)
        }
    }

    render() {

        if(this.props.tasks.length > 0){

        let tasklist = this.props.tasks.map(task => {

            if(task.status === 'Finished') {
                return <PackageHistoryItem task = {task} />
            }
        })
        return(
            <div className="history-container">

                <h1>Completed Deliveries</h1>
                <div className="inner-history-container" >
                    {tasklist.reverse()}  

                </div>

            </div>
        )
    } else {
        return (

            <h1>This is where your delivery history will be located.</h1>
        )
        }
    }
}


export default PackageHistory