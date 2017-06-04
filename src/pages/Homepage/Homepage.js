// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import {getPath} from '../../routes';

const Homepage = () => (
    <div>
        Homepage
        <br />
        <Link to={getPath('dashboard')}>Dashboard</Link>
        <br />
        <Link to={getPath('demo', {id: 1}, {limit: 10})}>Demo</Link>
    </div>
);

export default Homepage;
