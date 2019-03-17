import { Styles } from 'jss';

import { getIntent } from 'common/intent';
import { getSize } from 'common/size';
import { ITheme } from 'theme';
import { IIconProps } from './props';

export interface IStyleData {
  icon: {
    fontSize: string;
    color: string;
    cursor: string;
    opacity: number;
  };
}

export const getInitialStyles = (): any => ({
  icon: {
    fontSize: (data: IStyleData) => data.icon.fontSize,
    color: (data: IStyleData) => data.icon.color,
    cursor: (data: IStyleData) => data.icon.cursor,
    opacity: (data: IStyleData) => data.icon.opacity,
  },
});

export const getUpdatedStyles = (props: IIconProps) => (theme: ITheme): Styles => ({
  icon: {
    fontSize: getSize(props.size, ['75%', '120%' , '200%']),
    color: getIntent(props.intent, theme.palette.intent),
    cursor: props.disabled && 'not-allowed' || props.onClick && 'pointer' || 'inherit',
    opacity: props.disabled ? 0.5 : 1,
  },
});
