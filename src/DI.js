// @flow
import React from 'react';
import routes, { getPath } from './routes';
import { DIType } from './FlowTypes';

export default function injectDI(WrappedComponent: any) {
	const di = {
		routes: () => routes,
		getPath: () => getPath,
	};

	const DiUtils: { get: <T>(key: string) => DIType } = {
		get: (key) => di[key](),
	};
	return class DI extends React.Component {
		render() {
			// add state to WrappedComponent
			return <WrappedComponent di={DiUtils} />
		}
	}
}
