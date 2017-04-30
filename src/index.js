import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './modules/Root';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Root />,
	rootEl
);
