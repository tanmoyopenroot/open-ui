import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { useThemeStore } from 'theme';
import { IconList } from 'common/icons';
import { Intent } from 'common/intent';
import { Size } from 'common/size';

import iconStyles from './icon.styles';
import {
  IIcon,
  IIconProps,
} from './props';

const icon: IIcon<IIconProps> = (props) => {
  const {
    icon,
    className,
    disabled,
    onClick,
  } = props;

  const [theme] = useThemeStore();
  const [classes, setClasses] = React.useState(() => {
    const { createSheet } = iconStyles(props)(theme);
    return createSheet();
  });

  React.useEffect(
    () => {
      const {
        createSheet,
        removeSheet,
      } = iconStyles(props)(theme);

      setClasses(createSheet());
      return () => {
        removeSheet();
      };
    },
    [theme, props],
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  const combinedClasses = classnames(
    icon,
    className,
    classes.icon,
  );

  return (
    <span
      className={combinedClasses}
      onClick={handleClick}
    />
  );
};

icon.displayName = `${DISPLAY_NAME_PREFIX}.Icon`;
icon.Intent = Intent;
icon.Size = Size;
icon.Type = IconList;

icon.defaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
};

export {
  icon as Icon,
};
