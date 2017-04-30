// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DemoView from '../components/DemoView';
import { createEntry, deleteEntry } from '../actions/DemoActions';
import { Entry } from '../types/types';

type State = {
	form: Entry,
}

const initialState: Entry = {
	title: '',
	desc: '',
};

export class Demo extends Component {

	state: State = {
		form: initialState,
	};

	/**
	 * Handle form submission
	 *
	 * @param e
	 * @private
	 */
	_onSubmit = (e: Event) => {
		e.preventDefault();

		this.props.createEntry(this.state.form);

		this.setState({
			form: initialState,
		});
	};

	/**
	 * Handle form field change
	 *
	 * @param field
	 * @param value
	 * @private
	 */
	_onChange = (field: string, value: string) => {
		this.setState({
			form: {
				...this.state.form,
				[field]: value,
			}
		})
	};

	render() {
		const { demo, deleteEntry } = this.props;
		const { form } = this.state;
		return (
			<DemoView
				form={form}
				list={demo.list}
				actions={
					{
						'submit': this._onSubmit,
						'change': this._onChange,
						deleteEntry
					}
				}
			/>
		);
	}
}

Demo.propTypes = {
	demo: PropTypes.object,
};

function _mapStoreToProps(state) {
	return {
		demo: state.demo,
	};
}
function _mapDispatchToProps(dispatch) {
	return bindActionCreators({ createEntry, deleteEntry }, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(Demo);

