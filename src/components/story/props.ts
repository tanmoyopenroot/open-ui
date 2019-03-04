import * as React from 'react';
import { IProps } from 'common/props';

export interface IStoryProps extends IProps {
  controller: React.ReactNode;
  children: React.ReactChild;
}
