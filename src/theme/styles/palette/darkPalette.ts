import * as colors from '../colors';
import {
  IPaletteOptions,
  IPalette,
} from './props';

export default (palette: IPaletteOptions): IPalette => ({
  colors,
  line: palette.line.dark,
  disabled: palette.disabled.dark,
  icon: palette.icon.dark,
  background: {
    paper: palette.background.paper.dark,
    default: palette.background.default.dark,
  },
  intent: {
    primary: palette.intent.primary.dark,
    info: palette.intent.info.dark,
    success: palette.intent.success.dark,
    warning: palette.intent.warning.dark,
    error: palette.intent.error.dark,
    default: palette.intent.default.dark,
  },
  text: {
    mutated: palette.text.mutated.dark,
    default: palette.text.default.dark,
  },
});
