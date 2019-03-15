import * as React from 'react';
import {
  Elevation,
  TElevation,
} from 'common/elevation';
import {
  IProps,
  HTMLDivProps,
} from 'common/props';

export interface ICard<P = {}> extends React.FunctionComponent<P> {
  Elevation: TElevation;
}

export interface ICardProps extends IProps, HTMLDivProps {
  elevation?: Elevation;
  style?: Object;
}
