import jss, { StyleSheet } from 'jss';
import { getIntent } from 'common/intent';
import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { ITagProps } from './props';

let sheet: StyleSheet;

export default (props: ITagProps) => (theme: ITheme) => {
  const styles = {
    wrapper: {
      position: 'relative' as 'relative',
      width: 'min-content',
      fontWeight: 600,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center' as 'center',
      borderRadius: theme.shape.borderRadius,
      cursor: props.disabled ? 'not-allowed' : 'default',
      opacity: props.disabled ? 0.5 : 1,
      fontSize: getSize(props.size, ['.75rem', '.875rem', '.875rem']),
      padding: '.35rem .375rem',

      '&:after': {
        content: '""',
        backgroundColor: getIntent(props.intent, theme.palette.intent),
        borderRadius: theme.shape.borderRadius,
        opacity: 0.1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        zIndex: -1,
      },
    },
    label: {
      color: getIntent(props.intent, theme.palette.intent),
    },
    actions: {
      paddingLeft: '.375rem',
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
