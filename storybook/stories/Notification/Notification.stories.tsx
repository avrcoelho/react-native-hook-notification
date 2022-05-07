/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NotificationContainer, useNotification } from '../../../src/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

const App = (): JSX.Element => {
  const notification = useNotification();

  const onDispatchNotification = (): void => {
    notification.success({
      text: 'My first test! My first test! My first test! My first test!',
    });
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ marginTop: 100 }}
          onPress={onDispatchNotification}
        >
          <Text>Dispatch</Text>
        </TouchableOpacity>
      </View>

      <NotificationContainer />
    </>
  );
};

storiesOf('Notification', module)
  .addDecorator(getStory => <>{getStory()}</>)
  .add('Default', () => <App />);
