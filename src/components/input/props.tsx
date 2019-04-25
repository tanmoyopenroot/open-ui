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

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  FILE = 'file',
  PASSWORD = 'password',
}

export type TInputType = typeof InputType;

export interface IInput<P = {}> extends React.FunctionComponent<P> {
  Intent: TIntent;
  Size: TSize;
  Type: TInputType;
}

export interface DefaultProps {
  intent: Intent;
  size: Size;
  type: InputType;
}

export interface IInputProps extends IProps, Partial<DefaultProps> {
  children?: never;
  disabled?: boolean;
  elevated?: boolean;
  placeholder?: string;
  defaultValue?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onChange: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
}
