import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { IconList } from 'common/icons';
import { Intent } from 'common/intent';
import { Size } from 'common/size';
import {
  useThemeStore,
  useJSS,
} from 'theme';
import {
  getInitialStyles,
  getUpdatedStyles,
} from './icon.styles';
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
  const [classes, updateSheet] = useJSS(() => getInitialStyles());

  React.useEffect(
    () => {
      const updatedStyles = getUpdatedStyles(props)(theme);
      updateSheet(updatedStyles);
    },
    [theme, props],
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    },
    [disabled, onClick],
  );

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
