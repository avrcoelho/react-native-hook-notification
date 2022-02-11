import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Notification = (): JSX.Element => {
  return (
    <View style={[styles.container]}>
      <View style={styles.iconContainer} />

      <TouchableOpacity style={[styles.buttonClose]} />

      <View>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.text}>Text</Text>
      </View>
    </View>
  );
};
