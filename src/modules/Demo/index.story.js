import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Demo from './containers/Demo';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';

storiesOf('Demo', module)
	.addDecorator(
		(getStory) => (<Provider store={store}>
				{ getStory() }
			</Provider>
		)
	)
	.add('Demo withouth working actions', () => (
		<Demo />
	));
