/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Notification } from '../../../src/presentation/components/Notification';

storiesOf('Notification', module)
  .addDecorator(getStory => <>{getStory()}</>)
  .add('Default', () => (
    <Notification
      id="1"
      onRemove={() => {}}
      title="warning webpack-dev-server > chokidar@2.1.8: Chokidar "
      text="warning webpack-dev-server > chokidar@2.1.8: Chokidar  warning webpack-dev-server > chokidar@2.1.8: Chokidar  warning webpack-dev-server > chokidar@2.1.8: Chokidar "
      amount={1}
      type="error"
    />
  ));
