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
      text: 'My first test!',
      position: 'bottom-left',
      dragDirection: 'x',
      transition: 'bounce',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onDispatchNotification}>
          <Text>Dispatch</Text>
        </TouchableOpacity>
      </View>

      <NotificationContainer />
    </SafeAreaView>
  );
};

export default App;
