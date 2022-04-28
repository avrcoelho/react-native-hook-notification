import { StyleSheet } from 'react-native';

import { defineAnimationSize } from '../../utils/defineAnimationSize';

const customWidth = defineAnimationSize() - 32;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 9999999,
  },
  'top-right': {
    top: 16,
    right: 16,
    width: customWidth,
  },
  'top-center': {
    top: 16,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    margin: 'auto',
  },
  'top-left': {
    top: 16,
    left: 16,
    width: customWidth,
  },
  'bottom-right': {
    bottom: 16,
    right: 16,
    width: customWidth,
  },
  'bottom-center': {
    bottom: 16,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    margin: 'auto',
  },
  'bottom-left': {
    bottom: 16,
    left: 16,
    width: customWidth,
  },
});
