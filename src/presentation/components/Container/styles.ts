import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 9999999,
  },
  'top-right': {
    top: 16,
    right: 16,
  },
  'top-center': {
    top: 16,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  'top-left': {
    top: 16,
    left: 16,
  },
  'bottom-right': {
    bottom: 16,
    right: 16,
  },
  'bottom-center': {
    bottom: 16,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  'bottom-left': {
    bottom: 16,
    left: 16,
  },
});
