import 'react-native-gesture-handler';

// export { default } from './storybook';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Notification } from './src/presentation/components/Notification';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Notification
        id="1"
        onRemove={() => {}}
        text="warning webhhuhuupac dfugds iusdufys difusdy isduhfidhf hidhfisdufhs ihidfhishdhfsihbyun hiuxhc hudsu hdch uhudc"
        amount={1}
        type="success"
        dragDirection="x"
        theme="colored"
        showIcon
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
