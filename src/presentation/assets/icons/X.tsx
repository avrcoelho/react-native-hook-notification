import React from 'react';
import { SvgXml } from 'react-native-svg';

interface Props {
  color: string;
}

const xml = (color: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="${color}"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;

export const XIcon = ({ color }: Props): JSX.Element => (
  <SvgXml xml={xml(color)} width={16} height={16} />
);
