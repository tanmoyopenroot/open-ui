import * as colors from '../colors';
import {
  IPaletteOptions,
  IPalette,
} from './props';

export default (palette: IPaletteOptions): IPalette => ({
  colors,
  line: palette.line.light,
  disabled: palette.disabled.light,
  icon: palette.icon.light,
  background: {
    paper: palette.background.paper.light,
    default: palette.background.default.light,
  },
  intent: {
    primary: palette.intent.primary.light,
    info: palette.intent.info.light,
    success: palette.intent.success.light,
    warning: palette.intent.warning.light,
    error: palette.intent.error.light,
    default: palette.intent.default.light,
  },
  text: {
    mutated: palette.text.mutated.light,
    default: palette.text.default.light,
  },
});
