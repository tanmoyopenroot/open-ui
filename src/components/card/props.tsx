import * as React from 'react';

import {
  Elevation,
  TElevation,
} from '../../common/elevation';
import {
  IProps,
  HTMLDivProps,
} from '../../common/props';

export interface ICard<P = {}> extends React.FunctionComponent<P> {
  Elevation: TElevation;
}

export interface DefaultProps {
  elevation: Elevation;
}

export interface ICardProps extends IProps, HTMLDivProps, Partial<DefaultProps> {
  style?: Object;
}
