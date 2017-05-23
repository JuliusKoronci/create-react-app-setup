// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DI from '../../diFactory';

type Props = {
	getPath: () => () => string,
}

export const Homepage = ({ getPath }: Props) => (
	<div>
		Homepage
		<br />
		<Link to={getPath()('dashboard')}>Dashboard</Link>
		<br />
		<Link to={getPath()('demo', { id: 1 }, { limit: 10 })}>Demo</Link>
	</div>
);

Homepage.propTypes = {
	getPath: PropTypes.func.isRequired,
};

export default DI()(Homepage);
