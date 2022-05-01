import React from 'react';
import { render } from '@testing-library/react-native';

import { Notifications } from '..';

jest.mock('../useController', () => ({
  useController: () => ({
    onRemove: jest.fn(),
    notifications: [],
  }),
}));

describe('Notifications component', () => {
  it('should be able to render component', () => {
    expect(() => {
      render(<Notifications />);
    }).not.toThrow();
  });
});
