import * as React from 'react';

import { ThemeType } from '../../theme/styles/palette';
import {
  themeContext,
  ITheme,
} from '../../theme';

const useTheme = (): [
  ITheme,
  string,
  () => void,
  () => void,
] => {
  const {
    theme,
    type,
    setTheme,
  } = React.useContext(themeContext);
  const setLightTheme = () => setTheme(ThemeType.LIGHT);
  const setDarkTheme = () => setTheme(ThemeType.DARK);

  return [
    theme,
    type,
    setLightTheme,
    setDarkTheme,
  ];
};

export default useTheme;
