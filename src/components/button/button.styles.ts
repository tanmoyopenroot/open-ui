import jss, { StyleSheet } from 'jss';

import { ITheme } from 'theme';
import { IButtonProps } from './props';
import { getIntent } from 'common/intent';
import { getSize } from 'common/size';

let sheet: StyleSheet;

export default (props: IButtonProps) => (theme: ITheme) => {
  const styles = {
    button: {
      lineHeight: '1.5',
      position: 'relative' as 'relative',
      transition: 'all .15s ease',
      letterSpacing: '.025em',
      border: '1px solid transparent',
      color: props.outlined ?
        getIntent(props.intent, theme.palette.intent) : theme.palette.text.mutated,
      borderRadius: theme.shape.borderRadius,
      borderColor: getIntent(props.intent, theme.palette.intent),
      backgroundColor: props.outlined ?
        theme.palette.text.mutated : getIntent(props.intent, theme.palette.intent),
      boxShadow: props.disabled ?
        'none' :'0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
      fontSize: getSize(props.size, ['.75rem', '.875rem', '.875rem']),
      padding: getSize(props.size, ['.25rem .5rem', '.625rem 1.25rem', '.875rem 1rem']),
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      opacity: props.disabled ? 0.5 : 1,

      '&:hover': {
        boxShadow: props.disabled ?
          'none' : '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
      },

      '&:focus': {
        outline: 0,
      },

      '& > span': {
        marginRight: '.5rem',
        color: props.outlined ?
          getIntent(props.intent, theme.palette.intent) : theme.palette.text.mutated,
      },
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
