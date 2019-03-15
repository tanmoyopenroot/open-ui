import jss, { StyleSheet } from 'jss';

import { getIntent } from 'common/intent';
import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { IInputProps } from './props';

let sheet: StyleSheet;

export default (props: IInputProps) => (theme: ITheme) => {
  const styles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${getIntent(props.intent, theme.palette.intent)}`,
      borderRadius: theme.shape.borderRadius,
      padding: '0px 15px',
      cursor: props.disabled ? 'not-allowed' : 'inherit',
      opacity: props.disabled ? 0.5 : 1,
      backgroundColor: props.disabled ? theme.palette.disabled : theme.palette.colors.White.default,
    },
    leftElement: {
      position: 'relative' as 'relative',
    },
    input: {
      color: theme.palette.text.default,
      backgroundColor: 'transparent',
      cursor: props.disabled ? 'not-allowed' : 'inherit',
      lineHeight: '1.5',
      display: 'block',
      width: '100%',
      fontSize: getSize(props.size, ['.75rem', '1rem', '1.5rem']),
      height: getSize(props.size, [24, 30, 40]),
      padding: getSize(props.size, ['.25rem .5rem', '.325rem .75rem', '.675rem 1rem']),
      transition: 'all .2s cubic-bezier(.68,-.55,.265,1.55)',
      boxShadow: 'none',
      outline: 0,
      border: 'none',

      '&::placeholder': {
        color: getIntent(props.intent, theme.palette.intent),
      },
    },
    elevated: {
      transition: 'box-shadow .15s ease',
      border: 0,
      boxShadow: '0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)',

      '&:focus-within': {
        boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
      },
    },
    rightElement: {
      position: 'relative' as 'relative',
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
