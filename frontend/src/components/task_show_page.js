import React from 'react'
import '../stylesheets/task_show.css'
import axios from 'axios';

class TaskShowPage extends React.Component {
    constructor(props){
        debugger
        super(props)
        this.handleImageUpload = this.handleImageUpload.bind(this)
    }
    handleImageUpload = event => {
        // debugger
        const files = event.target[0].files
        const formData = new FormData()
        formData.append('image', files[0])

        axios.post('/api/image-upload', formData)
            .then(res => {
                console.log(res.data.imageUrl)
            })
    }
    componentDidMount(){
        this.props.fetchTask(this.props.taskId)
    }

    render(){
<<<<<<< HEAD
        // debugger
        if(this.props.tasks !== undefined) {
            return (
                <div className="taskshow-main">
                    <form type='form-data' onSubmit={(e) => this.handleImageUpload(e)}>
                        <input type="file"
                        />
                        <button>submit</button>
                    </form>
                    <br/>
                    <img className='task-image' src={this.props.tasks.imageUrl}/>
=======

        let imgUpload = <form type='form-data' onSubmit={(e) => this.handleImageUpload(e)}>
                        <input type="file"
                                            />
                        <button>submit</button>
                        </form>
        debugger
        if(this.props.tasks !== undefined) {
            return (
                <div className="taskshow-main">

                   { this.props.currentUser.usertype === 'Driver' ? null : imgUpload }

>>>>>>> Styling and containers done
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