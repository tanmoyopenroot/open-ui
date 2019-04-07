import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { IToggleProps } from './props';
import {
  Intent,
  getIntent,
} from 'common/intent';

export default (props: IToggleProps) => (theme: ITheme): Record<string, object> => ({
  label: {
    userSelect: 'none' as 'none',
    display: 'flex',
    color: theme.palette.text.default,
    cursor: props.disabled
      ? 'not-allowed'
      : 'pointer',
    opacity: props.disabled
      ? 0.5
      : 1,
  },
  wrapper: {
    position: 'relative' as 'relative',
    display: 'inline-block',
    width: getSize(
      props.size,
      [42, 50, 58],
    ),
    height: getSize(
      props.size,
      ['1.05rem', '1.5rem', '2rem'],
    ),
  },
  indicator: {
    position: 'absolute' as 'absolute',
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
  },
  indicatorActive: {
    border: `1px solid ${getIntent(Intent.PRIMARY, theme.palette.intent)}`,

    '&:before': {
      transform: 'translateX(1.625rem)',
      background: getIntent(Intent.PRIMARY, theme.palette.intent),
    },
  },
  text: {
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
  },
});
