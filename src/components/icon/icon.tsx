import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { useThemeStore } from 'theme';
import iconStyles from './icon.styles';
import {
  IconList,
  TIconName,
} from 'common/icons';
import {
  Intent,
  TIntent,
} from 'common/intent';
import {
  IProps,
} from 'common/props';
import {
  Size,
  TSize,
} from 'common/size';

interface IIcon<P = {}> extends React.FunctionComponent<P> {
  Intent: TIntent;
  Size: TSize;
  Value: TIconName;
}

export interface IIconProps extends IProps {
  children?: never;
  size?: Size;
  intent?: Intent;
  disabled?: boolean;
  icon?: string;
  elementRef?: (ref: HTMLElement | null) => any;
}

const icon: IIcon<IIconProps> = (props) => {
  const {
    icon,
    className,
  } = props;

  const [theme] = useThemeStore();
  const { classes } = iconStyles(props)(theme);

  return (
    <span
      className={`${icon} ${classes.icon} ${className}`}
    />
  );
};

icon.displayName = `${DISPLAY_NAME_PREFIX}.Icon`;
icon.Intent = Intent;
icon.Size = Size;
icon.Value = IconList;

icon.defaultProps = {
  className: '',
  intent: Intent.NONE,
  size: Size.DEFAULT,
};

export {
  icon as Icon,
};
