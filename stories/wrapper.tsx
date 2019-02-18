import * as React from 'react';
import { HTMLDivProps } from 'common/props';
import { createThemeStore } from 'theme';

createThemeStore();

export interface IWrapperProps extends HTMLDivProps {
  width: string;
}

export const WRAPPER = (props: IWrapperProps) => {
  const {
    width,
    ...htmlProps
  } = props;

  const style = {
    width,
    margin: '100px auto',
  };

  return (
    <div
      style={style}
      {...htmlProps}
    />
  );
};
