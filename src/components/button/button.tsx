import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';
import { IconList } from '../../common/icons';
import buttonStyles from './button.styles';
import {
  useTheme,
  useClasses,
} from '../../common/hooks';
import {
  Icon,
  IIconProps,
} from '../icon';
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

const MemoizedIcon = React.memo((props: IIconProps) => (
  <Icon
    icon={props.icon}
    size={props.size}
  />
));

const Button: IButton<IButtonProps> = (props) => {
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

  const [theme] = useTheme();
  const [classes] = useClasses(
    () => buttonStyles(props, theme),
    [theme.type, props],
  );

  const handleClick = React.useCallback(
    (event: React.FormEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick(event);
      }
    },
    [disabled],
  );

  return (
    <button
      className={classnames(
        className,
        classes.button,
      )}
      type={type}
      onClick={handleClick}
    >
      <MemoizedIcon
        icon={icon}
        size={size}
      />
      {!circular && children}
    </button>
  );
};

Button.displayName = displayName;
Button.defaultProps = defaultProps;

Button.Intent = Intent;
Button.Size = Size;
Button.Type = ButtonType;
Button.Icon = IconList;

export {
  Button,
};
