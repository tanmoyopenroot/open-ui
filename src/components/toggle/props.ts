import {
  IProps,
  HTMLInputProps,
} from 'common/props';
import {
  Size,
  TSize,
} from 'common/size';

export enum ToggleType {
  CHECKBOX = 'checkbox',
  SWITCH = 'switch',
}

export type TToggleType = typeof ToggleType;

export interface IToggle<P = {}> extends React.FunctionComponent<P> {
  Size: TSize;
  Type: TToggleType;
}

export interface IToggleProps extends IProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  size?: Size;
  type?: ToggleType;
  name?: string;
  onChange: (value: boolean) => void;
}
