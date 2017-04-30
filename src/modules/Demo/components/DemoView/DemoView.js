// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Entry } from '../../types/types';

type Args = {
	list: Array<Object>,
	actions: {
		submit: Function,
		deleteEntry: Function,
		change: Function,
	},
	form: Entry,
}

const DemoView = ({ list, actions, form }: Args) => {
	return (
		<div>
			<h2>List of entries</h2>
			{list.map((item) => {
				return (
					<ul key={item.id}>
						<li>{item.id}</li>
						<li>{item.title}</li>
						<li>{item.desc}</li>
						<li>
							<button onClick={() => actions.deleteEntry(item.id)}>delete item</button>
						</li>
					</ul>
				);
			})}

			<form onSubmit={actions.submit}>
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

