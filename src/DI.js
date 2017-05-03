import React from 'react';
import routes, { getPath } from './routes';

export type DIType = {
	routes: <T>() => Array<{
		name: string,
		path: string,
		component: Function
	}>,
	getPath: <T>(name: string, params: ?{}, queryParams: ?{}) => string,
};

export default function injectDI(WrappedComponent) {
	const di = {
		routes: () => routes,
		getPath: () => getPath,
	};

	const DiUtils: {
		get: <T>(key: string) => DIType,
	} = {
		get: (key) => di[key](),
	};
	return class DI extends React.Component {
		render() {
			// add state to WrappedComponent
			return <WrappedComponent di={DiUtils} />
		}
	}
}
