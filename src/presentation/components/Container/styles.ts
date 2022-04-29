import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 9999999,
  },
  'top-right': {
    top: 32,
    paddingHorizontal: 16,
  },
  'top-center': {
    top: 32,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  'top-left': {
    top: 32,
    paddingHorizontal: 16,
  },
  'bottom-right': {
    bottom: 32,
    paddingHorizontal: 16,
  },
  'bottom-center': {
    bottom: 32,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  'bottom-left': {
    bottom: 32,
    paddingHorizontal: 16,
  },
});
