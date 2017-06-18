// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DemoView from '../components/DemoView';
import { createEntry, deleteEntry } from '../actions/DemoActions';
import { Entry, Error } from '../types/types';

type State = {
  form: Entry,
  errors: Array<Error>
}

const initialState: Entry = {
  title: '',
  desc: '',
};

export class Demo extends Component {

  state: State = {
    form: initialState,
    errors: [],
  };

  /**
   * Handle form submission
   *
   * @param e
   * @private
   */
  onSubmit = (e: Event) => {
    e.preventDefault();
    if (!this.validateEntry(this.state.form)) {
      return;
    }
    this.props.createEntry(this.state.form);

    this.setState({ form: initialState, errors: [] });
  };

  /**
   * Handle form field change
   *
   * @param field
   * @param value
   * @private
   */
  onChange = (field: string, value: string) => {
    this.setState({
      form: {
        ...this.state.form,
        [field]: value,
      },
    });
  };

  /**
   * Validate fields before submitting
   *
   * @param entry
   * @returns {boolean}
   * @private
   */
  validateEntry = (entry: Entry): boolean => {
    const errors = [];
    if (!entry.title || entry.title === '') {
      errors.push({ field: 'title', message: 'title is required' });
    }
    if (!entry.desc || entry.desc === '') {
      errors.push({ field: 'desc', message: 'description is required' });
    }

    if (errors.length === 0) {
      return true;
    }

    this.setState({ errors });

    return false;
  };

  render() {
    const { deleteEntry, demo } = this.props;
    const { form, errors } = this.state;
    return (<DemoView
      form={form}
      list={demo.list}
      errors={errors}
      actions={{
        submit: this.onSubmit,
        change: this.onChange,
        deleteEntry,
      }}
    />);
  }
}

Demo.propTypes = {
  demo: PropTypes.shape({
    list: PropTypes.Array,
  }).isRequired,
  createEntry: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
};

function mapStoreToProps(state) {
  return { demo: state.demo };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createEntry,
    deleteEntry,
  }, dispatch);
}

export default connect(mapStoreToProps, mapDispatchToProps)(Demo);
