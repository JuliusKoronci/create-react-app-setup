// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Entry, Error } from '../../types/types';

type Args = {
	list: Array<Object>,
	actions: {
		submit: Function,
		deleteEntry: Function,
		change: Function,
	},
	form: Entry,
	errors: Array<Error>,
}

const DemoView = ({ list, actions, form, errors }: Args) => {
	return (
		<div>
			<h2>List of entries</h2>
			{list.map((item) => {
				return (
					<ul key={item.id}>
						<li>{item.id}</li>
						<li>{item.title}</li>
						<li>{item.desc}{item.wtd}</li>
						<li>
							<button onClick={() => actions.deleteEntry(item.id)}>delete item</button>
						</li>
					</ul>
				);
			})}

			<form onSubmit={actions.submit}>
				<ul style={{ color: 'red' }}>
					{errors.map((error, i) => {
						return <li key={i}>{`${error.message}`}</li>
					})}
				</ul>
				<input
					onChange={(e) => actions.change('title', e.target.value)}
					type="text"
					value={form.title}
					placeholder="title"
				/>
				<input
					onChange={(e) => actions.change('desc', e.target.value)}
					type="text"
					value={form.desc}
					placeholder="description"
				/>
				<button type="submit">create</button>
			</form>
		</div>
	);
};

DemoView.defaultProps = {
	list: [],
};

DemoView.propTypes = {
	actions: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,
	list: PropTypes.array.isRequired,
};

export default DemoView;

