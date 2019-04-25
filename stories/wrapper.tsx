import * as React from 'react';
import { HTMLDivProps } from '../src/common/props';
import { createThemeStore } from '../src/theme';

createThemeStore();

export interface IStoryWrapperProps extends HTMLDivProps {
  width: string;
}

const wrapper: React.FunctionComponent<IStoryWrapperProps> = (props) => {
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

export {
  wrapper as StoryWrapper,
};
