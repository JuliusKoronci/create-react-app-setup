import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { WithNotes } from '@kadira/storybook-addon-notes';
import Demo from './containers/Demo';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { withKnobs } from '@kadira/storybook-addon-knobs';

storiesOf('Demo', module)
	.addDecorator(
		(getStory) => (<Provider store={store}>
				{ getStory() }
			</Provider>
		)
	)
	.addDecorator(withKnobs)
	.addWithInfo(
		'Simple Demo ussage',
		`
      		This is the basic usage the demo module.
    	`,
		() => (
			<WithNotes notes={'This is a very simple note for our Demo module'}>
				<Demo />
			</WithNotes>
		));
