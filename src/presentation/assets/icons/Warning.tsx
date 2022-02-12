import React from 'react';
import { SvgXml } from 'react-native-svg';

import { NotificationType } from '../../types/Notification';

interface Props {
  color: string;
  type: NotificationType;
}

const xml = (color: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="${color}"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`;

export const Warning = ({ color, type }: Props): JSX.Element => (
  <SvgXml
    xml={xml(color)}
    width={24}
    height={24}
    accessibilityLabel={`icon ${type}`}
  />
);
