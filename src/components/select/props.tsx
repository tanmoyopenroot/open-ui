import * as React from 'react';

import { IProps } from '../../common/props';

export interface ISelect<P = {}> extends React.FunctionComponent<P> {
}

export interface ISelectOption {
  value: string;
  label: string;
}

export interface DefaultProps {
  defaultValue: ISelectOption[];
  searchable?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  clearable?: boolean;
}

export interface ISelectProps extends IProps, Partial<DefaultProps> {
  options: ISelectOption[];
  onChange: (data: ISelectOption[]) => void;
}
