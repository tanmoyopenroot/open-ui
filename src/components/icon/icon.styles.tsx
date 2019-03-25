import { Styles } from 'jss';

import { getIntent } from 'common/intent';
import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { IIconProps } from './props';

export interface IIconStyle {
  icon: object;
}

export const getInitialStyles = (): any => ({
  icon: (data: IIconStyle) => ({
    ...data.icon,
  }),
});

export const getUpdatedStyles = (props: IIconProps) => (theme: ITheme): Styles => ({
  icon: {
    fontSize: getSize(props.size, ['75%', '120%' , '200%']),
    color: getIntent(props.intent, theme.palette.intent),
    cursor: props.disabled && 'not-allowed' || props.onClick && 'pointer' || 'inherit',
    opacity: props.disabled ? 0.5 : 1,
  },
});
