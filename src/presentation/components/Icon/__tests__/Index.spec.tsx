import React from 'react';
import { render } from '@testing-library/react-native';

import { Icon } from '..';

describe('Icon', () => {
  it('should ba able to render error icon', () => {
    const { getByA11yLabel } = render(<Icon type="error" color="#fff" />);

    expect(getByA11yLabel('icon error')).toBeTruthy();
  });

  it('should ba able to render warning icon', () => {
    const { getByA11yLabel } = render(<Icon type="warning" color="#fff" />);

    expect(getByA11yLabel('icon warning')).toBeTruthy();
  });

  it('should ba able to render success icon', () => {
    const { getByA11yLabel } = render(<Icon type="success" color="#fff" />);

    expect(getByA11yLabel('icon success')).toBeTruthy();
  });

  it('should ba able to render info icon', () => {
    const { getByA11yLabel } = render(<Icon type="info" color="#fff" />);

    expect(getByA11yLabel('icon info')).toBeTruthy();
  });

  it('should ba able to render default icon', () => {
    const { queryByA11yLabel } = render(<Icon type="default" color="#fff" />);

    expect(queryByA11yLabel('icon default')).toBeFalsy();
  });
});
