import { css } from 'emotion';

import { ITheme } from '../../theme';
import { IButtonProps } from './props';
import { getIntent } from '../../common/intent';
import { getSize } from '../../common/size';

type IButtonStyles = {
  button: string;
};

export default (props: IButtonProps, theme: ITheme): IButtonStyles => ({
  button: css({
    position: 'relative',
    transition: 'all .15s ease',
    letterSpacing: '.025em',
    border: '1px solid transparent',
    borderColor: getIntent(props.intent, theme.palette.intent),
    fontSize: getSize(
      props.size,
      ['.75rem', '.875rem', '.875rem'],
    ),
    borderRadius: props.circular
      ? '100%'
      : theme.shape.borderRadius,
    lineHeight: props.circular
      ? 'normal'
      : '1.5',
    boxShadow: props.disabled
      ? 'none'
      : '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    padding: props.circular
      ? '10px'
      : getSize(props.size, ['.25rem .5rem', '.625rem 1.25rem', '.875rem 1rem']),
    cursor: props.disabled
      ? 'not-allowed'
      : 'pointer',
    opacity: props.disabled
      ? 0.5
      : 1,
    color: props.outlined
      ? getIntent(props.intent, theme.palette.intent)
      : theme.palette.text.mutated,
    backgroundColor: props.outlined
      ? theme.palette.text.mutated
      : getIntent(props.intent, theme.palette.intent),

    '&:hover': {
      boxShadow: props.disabled
        ? 'none'
        : '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
    },

    '&:focus': {
      outline: 0,
    },

    '& > span': {
      marginRight: props.circular
        ? 0
        : '.5rem',
      color: props.outlined
        ? getIntent(props.intent, theme.palette.intent)
        : theme.palette.text.mutated,
    },
  }),
});
