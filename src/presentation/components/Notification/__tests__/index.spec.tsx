import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { NotificationType } from '../../../types/Notification';
import { Notification } from '..';

let mockIsPortrait = false;
jest.mock('../useController', () => ({
  useController: () => ({
    animatedStyle: {},
    onGestureEvent: jest.fn(),
    typeAndTheme: 'defaultcolored',
    animation: {
      enter: {
        withCallback: jest.fn(),
      },
      exit: jest.fn(),
    },
    isPaused: false,
    withProgressBar: true,
    onFinishAnimation: jest.fn(),
    isPortrait: mockIsPortrait,
  }),
}));

const mockOnRemove = jest.fn();
const props = {
  type: 'success' as NotificationType,
  id: '124',
  text: 'text test',
  amount: 1,
  onRemove: mockOnRemove,
  draggable: true,
};
describe('Notification component', () => {
  it('should be able to render remove on click Notification', () => {
    const { getByA11yLabel } = render(<Notification {...props} />);

    fireEvent.press(getByA11yLabel('Close notification'));

    expect(props.onRemove).toBeCalled();
  });

  it('should not be able to render button close', () => {
    Object.assign(props, {
      showButtonClose: false,
    });
    const { queryByA11yLabel } = render(<Notification {...props} />);

    expect(queryByA11yLabel('Close notification')).toBeFalsy();
  });

  it('should be able to render title', () => {
    Object.assign(props, {
      title: 'title test',
      draggable: undefined,
    });
    mockIsPortrait = true;
    const { getByText } = render(<Notification {...props} />);

    expect(getByText('title test')).toBeTruthy();
  });
});
