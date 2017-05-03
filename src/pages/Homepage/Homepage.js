// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DI, { DIType } from '../../DI';
const Homepage = ({ di }: { di: DIType }) => (
	<div>
		Homepage
		<br />
		<Link to={di.getPath('dashboard')}>Dashboard</Link>
		<br />
		<Link to={di.getPath('demo', { id: 1 }, { limit: 10 })}>Demo</Link>
	</div>
);

Homepage.propTypes = {
	di: PropTypes.object.isRequired,
};

export default DI(Homepage);
