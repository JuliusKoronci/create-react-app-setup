// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import LoginView from '../components/Login';

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
  // eslint-disable-next-line no-undef
  onSubmit = (e: Event) => {
    e.preventDefault();
    const { username, password } = this.state;
    // eslint-disable-next-line no-undef
    const data = new FormData();
    data.append('_username', username);
    data.append('_password', password);

    axios
      .post('http://localhost:8080/app_dev.php/api/login', data)
      .then(response => this.setState({ response: response.data.token }))
      .catch((error) => {
        const status = error.response.status;
        if (status === 401) {
          this.setState({ response: 'Unauthorized' });
        }
      });
  };

  render() {
    const { username, password, response } = this.state;
    return (
      <div>
        {response}
        <LoginView
          formValues={{ username, password }}
          handleChange={this.onChange}
          handleSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

function mapStoreToProps(state) {
  return { state };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
