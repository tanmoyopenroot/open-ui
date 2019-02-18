import * as colors from '../colors';
import { IPaletteOptions } from './props';

export default (palette: IPaletteOptions) => ({
  colors,
  primary: palette.primary.dark,
  secondary: palette.secondary.dark,
  error: palette.error.dark,
  success: palette.success.dark,
  default: palette.default.dark,
  hint:  palette.hint.dark,
  icon: palette.icon.dark,
  disabled: palette.disabled.dark,
  text: {
    primary: palette.text.primary.dark,
    secondary: palette.text.secondary.dark,
    disabled: palette.text.disabled.dark,
    hint: palette.text.hint.dark,
    icon: palette.text.icon.dark,
  },
  divider: palette.divider.dark,
  background: {
    paper: palette.background.dark,
    default: '#303030',
  },
  action: {
    active: palette.action.active.dark,
    hover: palette.action.hover.dark,
    hoverOpacity: 0.1,
    selected: palette.action.selected.dark,
    disabled: palette.action.disabled.dark,
    disabledBackground: palette.action.disabledBackground.dark,
  },
});
