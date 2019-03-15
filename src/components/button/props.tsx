import * as React from 'react';
import {
  Intent,
  TIntent,
} from 'common/intent';
import {
  IProps,
  HTMLButtonProps,
} from 'common/props';
import {
  Size,
  TSize,
} from 'common/size';
import {
  IconList,
  TIconName,
} from 'common/icons';

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

export interface IButtonProps extends IProps {
  size?: Size;
  type?: ButtonType;
  intent?: Intent;
  icon?: IconList;
  disabled?: boolean;
  outlined?: boolean;
  iconRight?: boolean;
  circular?: boolean;
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export interface IButtonStyle {
  button: React.CSSProperties;
}
