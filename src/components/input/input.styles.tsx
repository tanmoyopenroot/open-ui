import { Styles } from 'jss';

import { getIntent } from 'common/intent';
import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { IInputProps } from './props';

export interface IInputStyle {
  wrapper: object;
  input: object;
}

export const getInitialStyles = (): any => ({
  wrapper: (data: IInputStyle) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0px 15px',
    ...data.wrapper,
  }),
  input: (data: IInputStyle) => ({
    outline: 0,
    width: '100%',
    border: 'none',
    display: 'block',
    lineHeight: '1.5',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    transition: 'all .2s cubic-bezier(.68,-.55,.265,1.55)',
    ...data.input,
  }),
  elevated: {
    border: 0,
    transition: 'box-shadow .15s ease',
    boxShadow: '0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)',
    '&:focus-within': {
      boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    },
  },
  leftElement: {
    position: 'relative' as 'relative',
  },
  rightElement: {
    position: 'relative' as 'relative',
  },
});

export const getUpdatedStyles = (props: IInputProps) => (theme: ITheme) => ({
  wrapper: {
    border: `1px solid ${getIntent(props.intent, theme.palette.intent)}`,
    borderRadius: theme.shape.borderRadius,
    cursor: props.disabled
      ? 'not-allowed'
      : 'inherit',
    opacity: props.disabled
      ? 0.5
      : 1,
    backgroundColor: props.disabled
      ? theme.palette.disabled
      : theme.palette.colors.White.default,
  },
  input: {
    color: theme.palette.text.default,
    cursor: props.disabled
      ? 'not-allowed'
      : 'inherit',
    fontSize: getSize(
      props.size,
      ['.75rem', '1rem', '1.5rem'],
    ),
    height: getSize(
      props.size,
      [24, 30, 40],
    ),
    padding: getSize(
      props.size,
      ['.25rem .5rem', '.325rem .75rem', '.675rem 1rem'],
    ),
  },
});
