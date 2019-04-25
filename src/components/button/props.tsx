import * as React from 'react';

import { IProps } from '../../common/props';
import {
  Intent,
  TIntent,
} from '../../common/intent';
import {
  Size,
  TSize,
} from '../../common/size';
import {
  IconList,
  TIconName,
} from '../../common/icons';

export enum ButtonType {
  DEFAULT = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export type TButtonType = typeof ButtonType;

export interface IButton<P = {}> extends React.FunctionComponent<P> {
  Intent: TIntent;
  Size: TSize;
  Type: TButtonType;
  Icon: TIconName;
}

export interface DefaultProps {
  intent: Intent;
  size: Size;
  type: ButtonType;
}

export interface IButtonProps extends IProps, Partial<DefaultProps> {
  icon?: IconList;
  disabled?: boolean;
  outlined?: boolean;
  iconRight?: boolean;
  circular?: boolean;
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void;
}
