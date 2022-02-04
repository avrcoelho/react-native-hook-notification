import React from 'react';
import { render } from '@testing-library/react-native';

import Component from '..';

test('test', () => {
  expect(() => {
    render(<Component />);
  }).not.toThrow();
});
