import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/login_form.css'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoCSubmit = this.handleDemoCSubmit.bind(this);
    this.handleDemoDSubmit = this.handleDemoDSubmit.bind(this)

    // this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/dashboard');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    // let user = {
    //   email: this.state.email,
    //   password: this.state.password
    // };

    this.props.login(this.state); 
  }
  handleDemoCSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: 'customer@demo.com',
      password: 'password',
    });
  }
  handleDemoDSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: 'driver@demo.com',
      password: 'password',
    });
  }
  // Render the session errors if there are any
  // renderErrors() {
  //   return(
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {this.state.errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="login-form-container">
        <div className="holder">
          <div className="login-form">
          <h1>Welcome back fellow Pigeon</h1>
        <form onSubmit={this.handleSubmit}>
        <br/>
        {this.state.errors["email"]}
        {this.state.errors['handle']}
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                />
            <br/>
            {this.state.errors["password"]}
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                />
            <br/>
            <input type="submit" value="Submit" />
            <button className='demo' onClick={this.handleDemoCSubmit}>Demo Customer</button>
              <button className='demo' onClick={this.handleDemoDSubmit}>Demo Driver</button>
            {/* {this.renderErrors()} */}
        </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);