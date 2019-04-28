import {
  createPalette,
  IPaletteOptions,
  IPalette,
  ThemeType,
} from './styles/palette';
import {
  shape as defaultShape,
  IShape,
} from './styles/shape';
import {
  spacing as defaultSpacing,
  ISpacing,
} from './styles/spacing';
import {
  topography,
  ITopography,
} from './styles/topography';
import elevations from './styles/elevations';

export interface IThemeOptions {
  paletteOption: IPaletteOptions;
  spacing: ISpacing;
  shape: IShape;
  elevations: string[];
  topography: ITopography;
}

export interface ITheme {
  palette: IPalette;
  shape: IShape;
  spacing: ISpacing;
  elevations: string[];
  topography: ITopography;
  type: ThemeType;
}

export const createTheme = (
  defaultTheme: ThemeType,
  options: Partial<IThemeOptions> = {},
) : ITheme => {
  const {
    paletteOption,
    spacing: spacingOption,
    shape: shapeOption,
    elevations: inputElevations,
    topography: topographyOptions,
  } = options;

  const palette = createPalette(paletteOption, defaultTheme);
  const shape = { ...defaultShape, ...spacingOption };
  const spacing = { ...defaultSpacing, ...shapeOption };

  const theme = {
    palette,
    shape,
    spacing,
    topography: topographyOptions || topography,
    elevations: inputElevations || elevations,
    type: defaultTheme,
  };

  return theme;
};
