// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { getPath } from '../../routes';
import { Login } from '../../modules/Login';

const Homepage = () => (
  <div>
        Homepage
        <br />
    <Link to={getPath('dashboard')}>Dashboard</Link>
    <br />
    <Link to={getPath('demo', { id: 1 }, { limit: 10 })}>Demo</Link>
    <br />
    <Login />
  </div>
);

export default Homepage;
