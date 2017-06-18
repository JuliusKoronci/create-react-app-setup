import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';
import { Provider } from 'react-redux';
import { withKnobs } from '@storybook/addon-knobs';
import Demo from './containers/Demo';
import store from '../../store/configureStore';

storiesOf('Demo', module)
  .addDecorator(
    getStory => (<Provider store={store}>
      { getStory() }
    </Provider>
    ),
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
    ),
  );
