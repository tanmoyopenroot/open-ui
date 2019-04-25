import { css } from 'emotion';

import { getIntent, Intent } from '../../common/intent';
import { ITheme } from '../../theme';
import { ISelectProps } from './props';

type ISelectStyles = {
  selectController: string;
  selectedDataContainer: string;
  input: string;
  actions: string;
  dropdownList: string;
  label: string;
};

export default (props: ISelectProps, theme: ITheme): ISelectStyles => ({
  selectController: css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '38px',
    border: `1px solid ${theme.palette.line}`,
    transition: 'all 100ms ease 0s',
    outline: '0px !important',
    borderRadius: theme.shape.borderRadius,
    opacity: props.disabled
      ? 0.5
      : 1,
    backgroundColor: props.disabled
      ? theme.palette.disabled
      : theme.palette.colors.White.default,

    '&:focus-within': {
      border: `1px solid ${theme.palette.intent.primary}`,
    },
  }),
  selectedDataContainer: css({
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '2px 8px',
    overflow: 'hidden',
  }),
  input: css({
    width: 'auto',
    outline: 0,
    border: 0,
    background: 'transparent',
    boxShadow: 'none',
    color: getIntent(Intent.DEFAULT, theme.palette.intent),
    lineHeight: 'normal',
    borderRadius: 0,
  }),
  actions: css({
    padding: 8,
  }),
  dropdownList: css({
    marginTop: 10,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)',

    '&:focus-within': {
      border: `1px solid ${theme.palette.intent.primary}`,
    },
  }),
  label: css({
    fontWeight: 400,
    display: 'block',
    fontSize: '.875rem',
    padding: '.5rem 1rem',
    border: 0,
    cursor: 'pointer',
    userSelect: 'none' as 'none',
    backgroundColor: 'transparent',
    color: getIntent(Intent.DEFAULT, theme.palette.intent),

    '&:hover': {
      backgroundColor: '#f6f9fc',
    },
  }),
});
