import 'react-native-gesture-handler';

// export { default } from './storybook';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Notification } from './src/presentation/components/Notification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Notification
          id="1"
          onRemove={() => {}}
          text="warning webhhuhuupac dfugds iusdufys difusdy isduhfidhf hidhfisdufhs ihidfhishdhfsihbyun hiuxhc hudsu hdch uhudc"
          amount={1}
          type="success"
          dragDirection="x"
          theme="colored"
          showIcon
          transition="flip"
          position="bottom-left"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
