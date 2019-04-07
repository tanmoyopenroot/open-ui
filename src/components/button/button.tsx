import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { Intent } from 'common/intent';
import { Size } from 'common/size';
import { IconList } from 'common/icons';
import { Icon } from 'components';
import {
  useThemeStore,
  useJSS,
} from 'theme';
import buttonStyles from './button.styles';
import {
  IButton,
  IButtonProps,
  ButtonType,
} from './props';

const button: IButton<IButtonProps> = (props) => {
  const {
    className,
    circular,
    disabled,
    icon,
    size,
    type,
    children,
    onClick,
  } = props;

  const [theme] = useThemeStore();
  const [classes] = useJSS(
    buttonStyles(props)(theme),
    [theme, props],
  );

  const handleClick = React.useCallback(
    (event: React.FormEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick(event);
      }
    },
    [disabled, onClick],
  );

  const combinedClasses = classnames(
    className,
    classes.button,
  );

  return (
    <button
      className={combinedClasses}
      type={type}
      onClick={handleClick}
    >
      <Icon
        icon={icon}
        size={size}
      />
      {!circular && children}
    </button>
  );
};

button.displayName = `${DISPLAY_NAME_PREFIX}.Button`;
button.Intent = Intent;
button.Size = Size;
button.Type = ButtonType;
button.Icon = IconList;

button.defaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
  type: ButtonType.DEFAULT,
};

export {
  button as Button,
};
