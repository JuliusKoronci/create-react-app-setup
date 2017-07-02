// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginView from '../components/Login';
import { actions, REDUCER_NAME } from '../ducks/loginDuck';
import formData from '../../../utils/formData';

export class Login extends Component {
  state = {
    formValues: {
      _username: '',
      _password: '',
    },
  };

  onChange = (key: string, value: string | number) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [key]: value,
      },
    });
  };
  // eslint-disable-next-line no-undef
  onSubmit = (e: Event) => {
    e.preventDefault();
    const { formValues } = this.state;
    this.props.login({}, {}, formData(formValues));
  };

  render() {
    const { formValues } = this.state;
    return (
      <LoginView
        formValues={formValues}
        handleChange={this.onChange}
        handleSubmit={this.onSubmit}
      />
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

function mapStoreToProps(state) {
  return {
    [REDUCER_NAME]: state[REDUCER_NAME],
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...actions,
  }, dispatch);
}

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
