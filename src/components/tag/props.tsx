import * as React from 'react';
import { IProps } from 'common/props';
import {
  Intent,
  TIntent,
} from 'common/intent';
import {
  Size,
  TSize,
} from 'common/size';

export interface ITagValue {
  value: string;
  label: string;
}

export interface ITag<P = {}> extends React.FunctionComponent<P> {
  Intent: TIntent;
  Size: TSize;
}

export interface ITagProps extends IProps {
  value: ITagValue;
  intent?: Intent;
  size?: Size;
  disabled?: boolean;
  onClose?: (value: ITagValue) => void;
}
