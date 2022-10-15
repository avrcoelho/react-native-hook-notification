/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

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
    notification.warning({
      title: "I'm using react-native-hook-notification ❤️",
      text: "I'm using react-native-hook-notification ❤️ I'm using react-native-hook-notification ❤️",
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ marginTop: 100 }}
          onPress={onDispatchNotification}
        >
          <Text>Dispatch</Text>
        </TouchableOpacity>
      </View>

      <NotificationContainer theme="light" closeOnPress />
    </GestureHandlerRootView>
  );
};

storiesOf('Notification', module)
  .addDecorator(getStory => <>{getStory()}</>)
  .add('Default', () => <App />);
