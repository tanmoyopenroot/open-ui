import jss, { StyleSheet } from 'jss';

import { getIntent } from 'common/intent';
import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { IIconProps } from './props';

let sheet: StyleSheet;

export default (props: IIconProps) => (theme: ITheme) => {
  const styles = {
    icon: {
      fontSize: getSize(props.size, ['90%', '120%' , '200%']),
      color: getIntent(props.intent, theme.palette.intent),
      cursor: props.disabled ? 'not-allowed' : 'inherit',
      opacity: props.disabled ? 0.5 : 1,
    },
  };

  const createSheet = () => {
    if (sheet && sheet.classes) {
      removeSheet();
    }
    sheet = jss
      .createStyleSheet(styles);
    sheet.attach();
    return sheet.classes;
  };

  const removeSheet = () => {
    sheet.detach();
    jss.removeStyleSheet(sheet);
  };

  return {
    createSheet,
    removeSheet,
  };
};
