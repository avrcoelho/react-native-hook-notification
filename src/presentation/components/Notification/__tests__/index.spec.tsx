import React from 'react';
import { View, Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import { NotificationType } from '../../../types/Notification';
import { Notification } from '..';
import { Colors } from '../../../constants/Colors';

let mockIsPortrait = false;
let mockTypeAndTheme = 'defaultcolored';
jest.mock('../useController', () => ({
  useController: () => ({
    animatedStyle: {},
    onGestureEvent: jest.fn(),
    typeAndTheme: mockTypeAndTheme,
    animation: {
      enter: {
        withCallback: jest.fn(),
      },
      exit: jest.fn(),
    },
    isPaused: false,
    onFinishAnimation: jest.fn(),
    onGetNotificationHeight: jest.fn(),
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
  icon: <View />,
};
describe('Notification component', () => {
  it('should not be able to render button close', () => {
    const { queryByA11yLabel } = render(<Notification {...props} />);

    expect(queryByA11yLabel('Close notification')).toBeFalsy();
  });

  it('should be able to render remove on click Notification', () => {
    Object.assign(props, {
      showButtonClose: true,
    });
    const { getByA11yLabel } = render(<Notification {...props} />);

    fireEvent.press(getByA11yLabel('Close notification'));

    expect(props.onRemove).toBeCalled();
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

  it('should be able to render custom icon', () => {
    const Icon = (): JSX.Element => <Text>IC</Text>;
    Object.assign(props, {
      icon: <Icon />,
      showButtonClose: true,
    });
    mockIsPortrait = true;
    const { getByText } = render(<Notification {...props} />);

    expect(getByText('IC')).toBeTruthy();
  });

  it('should be able to render custom notification with custom styles', () => {
    mockTypeAndTheme = 'defaultcustom';
    Object.assign(props, {
      type: 'custom',
      theme: 'custom',
      showButtonClose: true,
      customStyle: {
        container: {
          backgroundColor: Colors.Black,
        },
        title: {
          backgroundColor: Colors.Black,
        },
        text: {
          backgroundColor: Colors.Black,
        },
        icon: {
          backgroundColor: Colors.Black,
        },
        button: {
          backgroundColor: Colors.Black,
        },
        buttonText: {
          backgroundColor: Colors.Black,
        },
      },
    });
    mockIsPortrait = true;
    const { getByText } = render(<Notification {...props} />);

    expect(getByText('title test').props.style[1]).toEqual(
      expect.objectContaining({
        backgroundColor: Colors.Black,
      }),
    );
  });
});
