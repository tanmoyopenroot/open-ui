import * as React from 'react';
import { HTMLDivProps } from '../src/common/props';
import { ThemeProvider } from '../src/theme';

export interface IStoryWrapperProps extends HTMLDivProps {
  width: string;
}

const wrapper: React.FunctionComponent<IStoryWrapperProps> = (props) => {
  const {
    width,
    children,
    ...htmlProps
  } = props;

  const style = {
    width,
    margin: '100px auto',
  };

  return (
    <ThemeProvider>
      <div
        style={style}
        {...htmlProps}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export {
  wrapper as StoryWrapper,
};
