import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { useThemeStore } from 'theme';
import { IconList } from 'common/icons';
import {
  Intent,
  TIntent,
} from 'common/intent';
import {
  Size,
  TSize,
} from 'common/size';

import iconStyles from './icon.styles';
import {
  IIcon,
  IIconProps,
} from './props';

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
