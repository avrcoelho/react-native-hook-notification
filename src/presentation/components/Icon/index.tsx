import React from 'react';
import { ErrorIcon } from '../../assets/icons/Error';
import { Info } from '../../assets/icons/Info';
import { Success } from '../../assets/icons/Success';
import { Warning } from '../../assets/icons/Warning';

import { NotificationType } from '../../types/Notification';

interface IconProps {
  type: NotificationType;
  color: string;
}

export const Icon = ({ type, color }: IconProps): JSX.Element => {
  const Icons = {
    error: ErrorIcon,
    warning: Warning,
    info: Info,
    default: () => null,
    success: Success,
  };
  const SelectedIcon = Icons[type];

  return <SelectedIcon type={type} color={color} />;
};
