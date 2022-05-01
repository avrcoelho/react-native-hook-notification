import React from 'react';
import { render } from '@testing-library/react-native';

import { Notifications } from '..';

const mockUseControllerReturn = {
  onRemove: jest.fn(),
  notifications: [
    {
      text: 'test',
    },
  ],
};
jest.mock('../useController', () => ({
  useController: () => mockUseControllerReturn,
}));

describe('Notifications component', () => {
  it('should be able to render component whithout errors', () => {
    expect(() => {
      render(<Notifications />);
    }).not.toThrow();
  });

  it('should not be able to render component whithout errors', () => {
    mockUseControllerReturn.notifications = [];
    expect(() => {
      render(<Notifications />);
    }).not.toThrow();
  });
});
