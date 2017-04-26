import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './Root';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Root />,
	rootEl
);

if (module.hot) {
	module.hot.accept('./Root', () => {
		const NextApp = require('./Root').default;
		ReactDOM.render(
			<NextApp />,
			rootEl
		)

	});
}
