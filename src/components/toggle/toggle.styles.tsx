import { css } from 'emotion';

import { getSize } from '../../common/size';
import { ITheme } from '../../theme';
import { IToggleProps } from './props';
import {
  Intent,
  getIntent,
} from '../../common/intent';

type ITogglStyles = {
  label: string;
  wrapper: string;
  indicator: string;
  indicatorActive: string;
  text: string;
};

export default (props: IToggleProps, theme: ITheme): ITogglStyles => ({
  label: css({
    userSelect: 'none',
    display: 'flex',
    color: theme.palette.text.default,
    cursor: props.disabled
      ? 'not-allowed'
      : 'pointer',
    opacity: props.disabled
      ? 0.5
      : 1,
  }),
  wrapper: css({
    position: 'relative',
    display: 'inline-block',
    width: getSize(
      props.size,
      [42, 50, 58],
    ),
    height: getSize(
      props.size,
      ['1.05rem', '1.5rem', '2rem'],
    ),
  }),
  indicator: css({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    border: `1px solid ${theme.palette.line}`,
    borderRadius: '34px !important',
    backgroundColor: 'transparent',

    '&:before': {
      position: 'absolute' as 'absolute',
      bottom: 2,
      left: 2,
      width: getSize(props.size, [11, 18, 25]),
      height: getSize(props.size, [11, 18, 25]),
      content: '""',
      transition: 'all .2s cubic-bezier(.68,-.55,.265,1.55)',
      borderRadius: '50% !important',
      background: '#ddd',
    },
  }),
  indicatorActive: css({
    border: `1px solid ${getIntent(Intent.PRIMARY, theme.palette.intent)}`,

    '&:before': {
      transform: 'translateX(1.625rem)',
      background: getIntent(Intent.PRIMARY, theme.palette.intent),
    },
  }),
  text: css({
    margin: getSize(
      props.size, [
        '2px 8px',
        '3px 8px',
        '3px 8px',
      ],
    ),
    fontSize: getSize(
      props.size, [
        theme.topography.text.small,
        theme.topography.text.default,
        theme.topography.text.large,
      ],
    ),
  }),
});
