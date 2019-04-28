import * as React from 'react';

import { themeContext } from '../../theme';
import { ThemeType } from '../../theme/styles/palette';

const useTheme = () => {
  const [theme, dispatch] = React.useContext(themeContext);

  const setLightTheme = () => dispatch({
    type: ThemeType.LIGHT,
  });

  const setDarkTheme = () => dispatch({
    type: ThemeType.DARK,
  });

  return {
    theme,
    setLightTheme,
    setDarkTheme,
  };
};

export default useTheme;
