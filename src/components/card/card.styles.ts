import jss, { StyleSheet } from 'jss';

import { ITheme } from 'theme';
import { ICardProps } from './props';

let sheet: StyleSheet;

export default (props: ICardProps) => (theme: ITheme) => {
  const styles = {
    card: {
      position: 'relative' as 'relative',
      boxShadow: theme.elevations[props.elevation!],
      padding: '1.5rem',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      wordWrap: 'break-word' as 'break-word',
      border: '.0625rem solid rgba(0,0,0,.05)',
      transition: 'all .15s ease',
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
