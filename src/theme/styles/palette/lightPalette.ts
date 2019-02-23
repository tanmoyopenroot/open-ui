import * as colors from '../colors';
import { IPaletteOptions } from './props';

export default (palette: IPaletteOptions) => ({
  colors,
  primary: palette.primary.light,
  secondary: palette.secondary.light,
  error: palette.error.light,
  success: palette.success.light,
  default: palette.default.light,
  hint:  palette.hint.light,
  icon: palette.icon.light,
  disabled: palette.disabled.light,
  text: {
    primary: palette.text.primary.light,
    secondary: palette.text.secondary.light,
    disabled: palette.text.disabled.light,
    hint: palette.text.hint.light,
    icon: palette.text.icon.dark,
  },
  divider: palette.divider.light,
  background: {
    paper: palette.background.light,
    default: colors.Grey[50],
  },
  fontSize: {
    small: palette.fontSize.small,
    default: palette.fontSize.default,
    large: palette.fontSize.large,
  },
  action: {
    active: palette.action.active.light,
    hover: palette.action.hover.light,
    hoverOpacity: 0.08,
    selected: palette.action.selected.light,
    disabled: palette.action.disabled.light,
    disabledBackground: palette.action.disabledBackground.light,
  },
});
