import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/action";
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    displayName: ""
  };

  handleCheckUserName = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleCheckPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleLogIn = event => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  // handleRegister = event => {
  //   this.props.register({
  //     username: this.state.username,
  //     password: this.state.password,
  //     displayName: this.state.displayName
  //   });
  // };

  render() {
    return (
      <div className="login-form">
        <input
          type="text"
          onChange={this.handleCheckUserName}
          required
          placeholder="Enter username"
        />
        <input
          type="password"
          onChange={this.handleCheckPassword}
          required
          placeholder="Enter Password"
        />
        <br />
        <div>{this.props.result}</div>
        <Link to='/mainFeed'><button onClick={this.handleLogIn}>Login</button></Link>

        <Link to='/registration'><button onClick={this.handleLogIn}>Sign Up!</button></Link>
        {/* should this be an anchor tag here with just a link to sign up?   */}

        {/* wrap a Link tag around the button.    Link to=/main*/}
        {/* // we need to form the paths to be similar to the routes from todos3. routes will go in the app.js file. */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    result: state.LoginResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
        login: loginData => dispatch(login(loginData))
      };
    };
    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(LoginForm);