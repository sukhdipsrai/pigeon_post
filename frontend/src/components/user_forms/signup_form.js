import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/signup_form.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '',
      email: '',
      firstname: '',  
      lastname: '', 
      phone: "", 
      password: '',
      password2: '',
      errors: {}
    };
    // this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
      debugger
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleType(field) {
      debugger
      return e => {
          this.setState({ [field]: e.target.value  })

      }
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    let user = {
      usertype: this.state.userType, 
      firstname: this.state.firstname,  
      lastname: this.state.lastname,   
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    debugger
    return (
      <div className="signup-form-container">


              

        
        <div className="signup-main"> 

          <div className="signup-form">
            <div className="holder" >
          <h1>What would you like to sign up as?</h1>
              <div className="driver-or-customer">


              <input className="clickon" type="submit" value="Driver"  onClick={()=>this.update('userType')}/>
              <br/>
              <input className="clickon" type="submit" value="Customer"  onClick={()=>this.update('userType')}/>
              </div>
        <form onSubmit={this.handleSubmit}>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                />
            <br/>
              <input type="text"
                value={this.state.firstname}
                onChange={this.update('firstname')}
                placeholder="First Name"
                />
              <br/>
              
              <input type="text"
                value={this.state.lastname}
                onChange={this.update('lastname')}
                placeholder="Last Name"
                />
            <br/>
            <input type="text"
                value={this.state.phone}
                onChange={this.update('phone')}
                placeholder="Phone"
                />
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
        </form>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);