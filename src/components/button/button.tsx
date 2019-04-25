import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';
import { IconList } from '../../common/icons';
import { Icon } from '../icon';
import {
  useThemeStore,
  useJSS,
} from '../../theme';
import buttonStyles from './button.styles';
import {
  IButton,
  IButtonProps,
  DefaultProps,
  ButtonType,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Button`;
const defaultProps: DefaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
  type: ButtonType.DEFAULT,
};

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
    buttonStyles(props, theme),
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

button.displayName = displayName;
button.defaultProps = defaultProps;

button.Intent = Intent;
button.Size = Size;
button.Type = ButtonType;
button.Icon = IconList;

export {
  button as Button,
};
