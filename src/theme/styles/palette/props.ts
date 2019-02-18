export enum themeType {
  light = 'light',
  dark  = 'dark',
}

export interface IPalette {
  colors: object;
  primary: string;
  secondary: string;
  error: string;
  success: string;
  default: string;
  hint: string;
  icon: string;
  disabled: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
    icon: string;
  };
  divider: string;
  background: {
    paper: string;
    default: string;
  };
  action: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    disabled: string;
    disabledBackground: string;
  };
}

export interface ITextPalette {
  text: {
    primary: {
      light: string,
      dark: string,
    },
    secondary: {
      light: string,
      dark: string,
    },
    disabled: {
      light: string,
      dark: string,
    },
    hint: {
      light: string,
      dark: string,
    },
    icon: {
      light: string,
      dark: string,
    },
  };
}

export interface IActionPalette {
  action: {
    active: {
      light: string,
      dark: string,
    },
    hover: {
      light: string,
      dark: string,
    },
    selected: {
      light: string,
      dark: string,
    },
    disabled: {
      light: string,
      dark: string,
    },
    disabledBackground: {
      light: string,
      dark: string,
    },
  };
}

export interface IPaletteOptions extends ITextPalette, IActionPalette {
  primary: {
    light: string,
    dark: string,
  };
  secondary: {
    light: string,
    dark: string,
  };
  error: {
    light: string,
    dark: string,
  };
  success: {
    light: string,
    dark: string,
  };
  default: {
    light: string,
    dark: string,
  };
  hint: {
    light: string,
    dark: string,
  };
  icon: {
    light: string,
    dark: string,
  };
  divider: {
    light: string,
    dark: string,
  };
  disabled: {
    light: string,
    dark: string,
  };
  background: {
    light: string,
    dark: string,
  };
  type: themeType;
}
