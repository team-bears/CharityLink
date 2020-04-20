import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {loginMutation} from '../gql/mutations';

class LoginBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }
    submitForm(e){
        e.preventDefault();

        this.props.loginMutation({
            variables: {
                email: this.state.email,
                password: this.state.password
            },
        }).then( (res) => {
            alert("Hey, " + res.data.login.first_name);
        }).catch( (err) => {
            const error = err.graphQLErrors[0].message;
            this.setState({error: error});
        })
    }
    showError(){
        if (this.state.error == ''){
            return;
        }
        else {
            return (<div><span style={{color: 'red'}}>Whoopsie, {this.state.error}</span></div>);
        }
    }
    render() {
        return(
            <form id="login-box" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Email:</label>
                    <input type="text" onChange={ (e) => this.setState({ email: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Password:</label>
		    <input id="password_input" type="text"  onChange={ (e) => this.setState({ password: e.target.value }) } />
                </div>
                { this.showError()}
                <button>Login</button>
            </form>
        )
    }
}

export default compose(
    graphql(loginMutation, {name: "loginMutation"})
)(LoginBox);
