import {
  createPalette,
  IPaletteOptions,
  IPalette,
} from './styles/palette';
import {
  shape as defaultShape,
  IShape,
} from './styles/shape';
import {
  spacing as defaultSpacing,
  ISpacing,
} from './styles/spacing';
import elevations from './styles/elevations';

export interface IThemeOptions {
  paletteOption?: IPaletteOptions;
  spacing?: ISpacing;
  shape?: IShape;
  elevations?: string[];
}

export interface ITheme {
  palette: IPalette;
  shape: IShape;
  spacing: ISpacing;
  elevations: string[];
}

export default (options: IThemeOptions = {}) : ITheme => {
  const {
    paletteOption,
    spacing: spacingOption,
    shape: shapeOption,
    elevations: inputElevations,
  } = options;

  const palette = createPalette(paletteOption);
  const shape = { ...defaultShape, ...spacingOption };
  const spacing = { ...defaultSpacing, ...shapeOption };

  const theme = {
    palette,
    shape,
    spacing,
    elevations: inputElevations || elevations,
  };

  return theme;
};
