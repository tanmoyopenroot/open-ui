import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { IconList } from '../../common/icons';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';
import iconStyles from './icon.styles';
import {
  useTheme,
  useClasses,
} from '../../common/hooks';
import {
  IIcon,
  IIconProps,
  DefaultProps,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Icon`;
const defaultProps: DefaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
  disabled: false,
};

const Icon: IIcon<IIconProps> = (props) => {
  const {
    icon,
    className,
    disabled,
    onClick,
  } = props;

  const { theme } = useTheme();
  const { classes } = useClasses(
    iconStyles(props, theme),
    [theme.type, props],
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    },
    [disabled],
  );

  return (
    <span
      className={classnames(
        icon,
        className,
        classes.icon,
      )}
      onClick={handleClick}
    />
  );
};

Icon.displayName = displayName;
Icon.defaultProps = defaultProps;

Icon.Intent = Intent;
Icon.Size = Size;
Icon.Type = IconList;

export {
  Icon,
};
