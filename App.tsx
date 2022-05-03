import { TouchableOpacity } from 'react-native-gesture-handler';

// export { default } from './storybook';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NotificationContainer, useNotification } from './src/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
  },
});

const App = (): JSX.Element => {
  const notification = useNotification();

  const onDispatchNotification = (): void => {
    notification.error({
      text: 'My first test! My first test! My first test! My first test!',
      position: 'top-center',
      dragDirection: 'y',
      theme: 'colored',
      transition: 'zoom',
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

export default App;
