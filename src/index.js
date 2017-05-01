import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './modules/Root';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Root />,
	rootEl
);

if (module.hot) {
	module.hot.accept('./modules/Root', () => {
		const NextApp = require('./modules/Root').default;
		ReactDOM.render(
			<NextApp />,
			rootEl
		)

	});
}
