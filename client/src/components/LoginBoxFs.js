// React
import React, { Component } from "react";

// Lodash (Sorting Quickly)
import { flowRight as compose } from "lodash";

// GQL Mutations
import { graphql } from "react-apollo";
import { loginMutation } from "../gql/mutations";

// CSS
import "../css/LoginBox.css";

// Components
// import "..."

class LoginBoxFs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }
  submitForm(e) {
    e.preventDefault();

    this.props
      .loginMutation({
        variables: {
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(res => {
        alert("Hey, " + res.data.login.first_name);
      })
      .catch(err => {
        const error = err.graphQLErrors[0].message;
        this.setState({ error: error });
      });
  }
  showError() {
    if (this.state.error == "") {
      return;
    } else {
      return (
        <div>
          <span style={{ color: "red" }}>Whoopsie, {this.state.error}</span>
        </div>
      );
    }
  }

  // <h2>Login</h2>
  render() {
    return (
      <form
        id="login-box"
        class="login-box"
        onSubmit={this.submitForm.bind(this)}
      >
        <div class="title"> {this.props.text} </div>

        <div class="loginWord"> Login </div>

        <div class="user-box field">
          <input
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label>Username / Email Address </label>
        </div>

        <div class="user-box field">
          <input
            id="password_input"
            type="text"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <label>Password</label>
        </div>
        <button>Login</button>

        {this.showError()}
      </form>
    );
  }
}

export default compose(graphql(loginMutation, { name: "loginMutation" }))(
  LoginBoxFs
);
