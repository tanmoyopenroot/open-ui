import * as React from 'react';

import { ThemeType } from './styles/palette';
import {
  createTheme,
  ITheme,
  IThemeOptions,
} from './createTheme';

interface IDefaultProps {
  themeType: ThemeType;
}

interface IProps {
  options?: IThemeOptions;
  themeType?: ThemeType;
  children: React.ReactNode;
}

const defaultProps: IDefaultProps = {
  themeType: ThemeType.LIGHT,
};

export const themeContext = React.createContext<{
  theme: ITheme,
  type: ThemeType,
  setTheme: (type: ThemeType) => void,
}>(
  undefined as any,
);

export const ThemeProvider: React.FunctionComponent<IProps> = (props) => {
  const {
    options,
    themeType = ThemeType.LIGHT,
    children,
  } = props;
  const [theme, setTheme] = React.useState(() => ({
    value: createTheme(themeType, options),
    type: themeType,
  }));

  React.useEffect(
    () => {
      setTheme({
        value: createTheme(themeType, options),
        type: themeType,
      });
    },
    [options, themeType],
  );

  const setCurrentTheme = React.useCallback(
    (type: ThemeType) => {
      setTheme({
        type,
        value: createTheme(type, options),
      });
    },
    [options, themeType],
  );

  const { Provider } = themeContext;

  return (
    <Provider
      value={{
        theme: theme.value,
        type: theme.type,
        setTheme: setCurrentTheme,
      }}
    >
      {children}
    </Provider>
  );
};

ThemeProvider.defaultProps = defaultProps;
