import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '',
      email: '',
      firstname: '',  
      lastname: '',  
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
      user_type: this.userType, 
      firstname: this.firstname,  
      lastname: this.lastname,   
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
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

          <h1>What would you like to sign up as?</h1>

          <input type="submit" value="Driver"  onClick={this.update('userType')}/>
          <input type="submit" value="Customer"  onClick={this.update('userType')}/>
              

        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
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
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);