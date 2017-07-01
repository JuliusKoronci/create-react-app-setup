// @flow
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Login extends PureComponent {
    render() {
        const {username, password, handleChange, handleSubmit} = this.props;
        return (
            <form>
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => handleChange('username', e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => handleChange('password', e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        );
    }
}

Login.defaultProps = {
    formValues: {
        username: '',
        password: '',
    }
};
Login.propTypes = {
    formValues: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Login;

