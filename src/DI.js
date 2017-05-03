import React from 'react';
import routes from './routes';

export default function injectDI(WrappedComponent) {
	const di = {
		routes: () => routes,
	};
	return class DI extends React.Component {
		render() {
			// add state to WrappedComponent
			return <WrappedComponent di={di} />
		}
	}
}
