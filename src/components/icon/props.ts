import { IProps } from 'common/props';
import { TIconName } from 'common/icons';
import {
  Intent,
  TIntent,
} from 'common/intent';
import {
  Size,
  TSize,
} from 'common/size';

export interface IIcon<P = {}> extends React.FunctionComponent<P> {
  Intent: TIntent;
  Size: TSize;
  Value: TIconName;
}

export interface IIconProps extends IProps {
  children?: never;
  size?: Size;
  intent?: Intent;
  disabled?: boolean;
  icon?: string;
  elementRef?: (ref: HTMLElement | null) => any;
}
