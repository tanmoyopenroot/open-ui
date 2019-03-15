import * as React from 'react';
import { IProps } from 'common/props';
import {
  IconList,
  TIconName,
} from 'common/icons';
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
  Type: TIconName;
}

export interface IIconProps extends IProps {
  children?: never;
  size?: Size;
  intent?: Intent;
  disabled?: boolean;
  icon?: IconList;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
