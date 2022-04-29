import { TouchableOpacity } from 'react-native-gesture-handler';

// export { default } from './storybook';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NotificationContainer, useNotification } from './src/main';

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
      title:
        'My first test! test! test! test! test! test! test! test! test! test!',
      text: 'My first test! My first test! My first test! My first test!',
      position: 'bottom-right',
      dragDirection: 'y',
      transition: 'bounce',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ marginTop: 100 }}
          onPress={onDispatchNotification}
        >
          <Text>Dispatch</Text>
        </TouchableOpacity>
      </View>

      <NotificationContainer />
    </SafeAreaView>
  );
};

export default App;
