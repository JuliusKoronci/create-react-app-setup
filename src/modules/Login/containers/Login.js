// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginView from '../components/Login';
import axios from 'axios';

export class Login extends Component {
    state = {
        username: '',
        password: '',
        response: '',
    };

    onChange = (key: string, value: string | number) => {
        this.setState({
            [key]: value,
        });
    };
    onSubmit = (e: Event) => {
        e.preventDefault();
        const {username, password} = this.state;
        const data = new FormData();
        data.append('_username', username);
        data.append('_password', password);

        axios.post(
            'http://localhost:8080/app_dev.php/api/login',
            data
        )
            .then((response) => this.setState({response: response.data.token}))
            .catch((error) => {
                console.log(error.response.status);
            });
    };

    render() {
        const {username, password, response} = this.state;
        return (
            <div>
                {response}
                <LoginView
                    formValues={{username, password}}
                    handleChange={this.onChange}
                    handleSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

function _mapStoreToProps(state) {
    return {state};
}
function _mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(Login);

