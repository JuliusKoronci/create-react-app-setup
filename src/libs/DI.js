// @flow
import React from 'react';

export default function (config: {}, WrappedComponent: any) {
	const di = config;

	const DiUtils: { get: (key: string) => {} } = {
		get: (key) => di[key](),
	};

	const autoWire = (propTypes: {}): {} => {
		if (!propTypes) {
			return {};
		}

		const keys = Object.keys(propTypes);

		const injectedProps = {};

		keys.forEach((key) => {
			try {
				injectedProps[key] = di[key];
			} catch (e) {
				console.error(`Property ${key} is not registered in the DI, module props should be injected via the DI container`);
			}
		});

		return injectedProps;
	};

	return class DI extends React.Component {
		render() {
			// add state to WrappedComponent
			return <WrappedComponent di={DiUtils} {...autoWire(WrappedComponent.propTypes)} {...this.props} />
		}
	}
};
