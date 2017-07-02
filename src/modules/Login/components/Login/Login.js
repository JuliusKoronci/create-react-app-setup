/* eslint-disable no-underscore-dangle */
// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Login extends PureComponent {
  static defaultProps: Object;
  static propTypes: Object;

  render() {
    const { formValues, handleChange, handleSubmit } = this.props;
    return (
      <form>
        <input
          type="text"
          value={formValues._username}
          placeholder="Username"
          onChange={e => handleChange('_username', e.target.value)}
        />
        <input
          type="text"
          value={formValues._password}
          placeholder="Password"
          onChange={e => handleChange('_password', e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}

Login.defaultProps = {
  formValues: {
    _username: '',
    _password: '',
  },
};
Login.propTypes = {
  formValues: PropTypes.shape({
    _username: PropTypes.string,
    _password: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;

