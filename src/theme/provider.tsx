import * as React from 'react';

import { ThemeType } from './styles/palette';
import {
  createTheme,
  ITheme,
  IThemeOptions,
} from './createTheme';

interface IAction {
  type: string;
}

interface IDefaultProps {
  defaultTheme: ThemeType;
}

interface IProps {
  options?: IThemeOptions;
  defaultTheme?: ThemeType;
  children: React.ReactNode;
}

const defaultProps: IDefaultProps = {
  defaultTheme: ThemeType.LIGHT,
};

const reducer = (options?: IThemeOptions) => (state: ITheme, action: IAction) => {
  switch (action.type) {
    case ThemeType.LIGHT:
      return createTheme(ThemeType.LIGHT, options);

    case ThemeType.DARK:
      return createTheme(ThemeType.DARK, options);

    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};

export const themeContext = React.createContext<[ITheme, React.Dispatch<IAction>]>(
  [createTheme(ThemeType.LIGHT), (value: IAction) => {}],
);

export const ThemeProvider: React.FunctionComponent<IProps> = (props) => {
  const {
    options,
    defaultTheme = ThemeType.LIGHT,
    children,
  } = props;
  const theme = createTheme(defaultTheme, options);
  const reducerWithOptions = reducer(options);
  const contextValue = React.useReducer(reducerWithOptions, theme);
  const { Provider } = themeContext;

  return (
    <Provider
      value={contextValue}
    >
      {children}
    </Provider>
  );
};

ThemeProvider.defaultProps = defaultProps;
