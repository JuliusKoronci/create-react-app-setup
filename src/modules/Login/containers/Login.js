// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginView from '../components/Login';
import {} from '../actions/LoginActions';

export class Login extends Component {

	render() {
		return (
			<LoginView />
		);
	}
}

Login.propTypes = {
	test: PropTypes.string,
};

function _mapStoreToProps(state, ownProps) {
	return {};
}
function _mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(Login);

