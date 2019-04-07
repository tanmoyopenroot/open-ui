import { getIntent } from 'common/intent';
import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { IIconProps } from './props';

export default (props: IIconProps) => (theme: ITheme): Record<string, object> => ({
  icon: {
    cursor: props.disabled && 'not-allowed' || props.onClick && 'pointer' || 'inherit',
    fontSize: getSize(
      props.size,
      ['75%', '120%' , '200%'],
    ),
    color: getIntent(
      props.intent,
      theme.palette.intent,
    ),
    opacity: props.disabled
      ? 0.5
      : 1,
  },
});
