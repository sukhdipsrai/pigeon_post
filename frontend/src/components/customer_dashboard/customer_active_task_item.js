import React from 'react'
import smallpigeon from '../../images/favicon-32x32.png'


class ActiveTaskItem extends React.Component {

    render(){

        return (

            <div className="active-task-item">
            <h1>
            dropoff: 
                </h1>
                {this.props.task.dropoff_loc}
            <br/>
            <br/>
            <h1>
            total weight:   
            </h1>
                {this.props.task.weight} (lb)
            <br/>
            <br/>
            <h1>
                status: 
                </h1>
                In transit with pigeon {this.props.task.driver_id}     <img src= {smallpigeon}/>
            <br/>
            <div className="text-div">
                <p>
                    Contact pigeon
                    </p>
            </div>
        </div>
    //   </div>
    );
  }
}

export default ActiveTaskItem;
