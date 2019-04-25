import * as React from 'react';

import { IProps } from '../../common/props';
import {
  Size,
  TSize,
} from '../../common/size';

export enum ToggleType {
  CHECKBOX = 'checkbox',
  SWITCH = 'switch',
}

export type TToggleType = typeof ToggleType;

export interface IToggle<P = {}> extends React.FunctionComponent<P> {
  Size: TSize;
  Type: TToggleType;
}

export interface DefaultProps {
  size: Size;
  type: ToggleType;
}

export interface IToggleProps extends IProps, Partial<DefaultProps> {
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  onChange: (value: boolean) => void;
}
