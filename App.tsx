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
        title="warning webpack-dev-server > chokidar@2.1.8: Chokidar "
        text="warning webpack-dev-server > chokidar@2.1.8: Chokidar  warning webpack-dev-server > chokidar@2.1.8: Chokidar  warning webpack-dev-server > chokidar@2.1.8: Chokidar "
        amount={1}
        type="success"
        dragDirection="x"
        theme="colored"
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
