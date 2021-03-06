import { css } from 'emotion';

import { getIntent } from '../../common/intent';
import { getSize } from '../../common/size';
import { ITheme } from '../../theme';
import { HEX_TO_RGBA } from '../../utils/convertColor';
import { ITagProps } from './props';

type ITagStyles = {
  wrapper: string;
  label: string;
  actions: string;
};

export default (props: ITagProps, theme: ITheme): ITagStyles => ({
  wrapper: css({
    position: 'relative',
    width: 'min-content',
    margin: 2,
    fontWeight: 600,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    cursor: props.disabled ? 'not-allowed' : 'default',
    opacity: props.disabled ? 0.5 : 1,
    padding: getSize(props.size, ['.35rem .375rem', '.5rem .4rem', '.6rem 1rem']),
    backgroundColor: HEX_TO_RGBA(getIntent(props.intent, theme.palette.intent), 0.1),
  }),
  label: css({
    userSelect: 'none',
    color: getIntent(props.intent, theme.palette.intent),
    fontSize: getSize(props.size, ['.75rem', '.975rem', '2rem']),
  }),
  actions: css({
    paddingLeft: '.375rem',
    cursor: props.disabled ? 'inherit' : 'pointer',
  }),
});
