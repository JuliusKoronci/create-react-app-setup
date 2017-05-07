// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DemoView from '../components/DemoView';
import {createEntry, deleteEntry} from '../actions/DemoActions';
import {Entry, Error} from '../types/types';

type State = {
	form: Entry,
	errors: Array < Error >
}

const initialState : Entry = {
	title: '',
	desc: ''
};

export class Demo extends Component {

	state : State = {
		form: initialState,
		errors: []
	};

	/**
	 * Handle form submission
	 *
	 * @param e
	 * @private
	 */
	_onSubmit = (e : Event) => {
		e.preventDefault();
		if (!this._validateEntry(this.state.form)) {
			return;
		}
		this
			.props
			.createEntry(this.state.form);

		this.setState({form: initialState, errors: []});
	};

	/**
	 * Handle form field change
	 *
	 * @param field
	 * @param value
	 * @private
	 */
	_onChange = (field : string, value : string) => {
		this.setState({
			form: {
				...this.state.form,
				[field]: value
			}
		})
	};

	/**
	 * Validate fields before submitting
	 *
	 * @param entry
	 * @returns {boolean}
	 * @private
	 */
	_validateEntry = (entry : Entry) : boolean => {
		const errors = [];
		if (!entry.title || entry.title === '') {
			errors.push({field: 'title', message: 'title is required'})
		}
		if (!entry.desc || entry.desc === '') {
			errors.push({field: 'desc', message: 'description is required'})
		}

		if (errors.length === 0) {
			return true;
		}

		this.setState({errors: errors});

		return false;
	};

	render() {
		const {demo, deleteEntry} = this.props;
		const {form, errors} = this.state;
		return (<DemoView form={form} list={demo.list} errors={errors} actions={{
			'submit': this._onSubmit,
			'change': this._onChange,
			deleteEntry
		}}/>);
	}
}

Demo.propTypes = {
	demo: PropTypes.object
};

function _mapStoreToProps(state) {
	return {demo: state.demo};
}
function _mapDispatchToProps(dispatch) {
	return bindActionCreators({
		createEntry,
		deleteEntry
	}, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(Demo);
