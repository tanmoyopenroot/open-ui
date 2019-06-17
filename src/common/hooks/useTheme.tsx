import * as React from 'react';

import { themeContext } from '../../theme';
import { ThemeType } from '../../theme/styles/palette';

const useTheme = () => {
  const {
    theme,
    setTheme,
  } = React.useContext(themeContext);
  const setLightTheme = () => setTheme(ThemeType.LIGHT);
  const setDarkTheme = () => setTheme(ThemeType.DARK);

  return {
    theme,
    setLightTheme,
    setDarkTheme,
  };
};

export default useTheme;
