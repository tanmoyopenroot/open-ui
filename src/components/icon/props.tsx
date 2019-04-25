import * as React from 'react';

import { IProps } from '../../common/props';
import {
  IconList,
  TIconName,
} from '../../common/icons';
import {
  Intent,
  TIntent,
} from '../../common/intent';
import {
  Size,
  TSize,
} from '../../common/size';

export interface IIcon<P = {}> extends React.FunctionComponent<P> {
  Intent: TIntent;
  Size: TSize;
  Type: TIconName;
}

export interface DefaultProps {
  intent: Intent;
  size: Size;
  disabled: boolean;
}

export interface IIconProps extends IProps, Partial<DefaultProps> {
  children?: never;
  icon?: IconList;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
