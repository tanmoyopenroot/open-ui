import { IProps } from 'common/props';
import {
  Intent,
  TIntent,
} from 'common/intent';
import {
  Size,
  TSize,
} from 'common/size';

export enum Type {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  FILE = 'file',
  PASSWORD = 'password',
}

export type TType = typeof Type;

export interface IInput<P = {}> extends React.FunctionComponent<P> {
  Intent: TIntent;
  Size: TSize;
  Type: TType;
}

export interface IInputProps extends IProps {
  children?: never;
  size?: Size;
  intent?: Intent;
  disabled?: boolean;
  elevated?: boolean;
  placeholder?: string;
  defaultValue?: string;
  type?: Type;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onChange: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
}
