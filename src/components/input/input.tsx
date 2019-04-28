import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';
import inputStyles from './input.styles';
import {
  useTheme,
  useClasses,
} from '../../common/hooks';
import {
  InputType,
  IInput,
  IInputProps,
  DefaultProps,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Input`;
const defaultProps: DefaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
  type: InputType.TEXT,
};

const Input: IInput<IInputProps> = (props) => {
  const {
    leftElement,
    rightElement,
    disabled,
    elevated,
    placeholder,
    defaultValue,
    type,
    className,
    onChange,
  } = props;

  const { theme } = useTheme();
  const { classes } = useClasses(
    inputStyles(props, theme),
    [theme.type, props],
  );

  const handleChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange(event, event.currentTarget.value);
      }
    },
    [disabled],
  );

  const leftNode = React.useMemo(
    () => (
      <div className={classes.leftElement}>
        {leftElement}
      </div>
    ),
    [leftElement],
  );

  const rightNode = React.useMemo(
    () => (
      <div className={classes.rightElement}>
        {rightElement}
      </div>
    ),
    [rightElement],
  );

  return (
    <div
      className={classnames(
        className,
        classes.wrapper,
        { [classes.elevated]: elevated },
      )}
    >
      {leftElement && leftNode}
      <input
        className={classes.input}
        placeholder={placeholder}
        value={defaultValue}
        disabled={disabled}
        onChange={handleChange}
        type={type}
      />
      {rightElement && rightNode}
    </div>
  );
};

Input.displayName = displayName;
Input.defaultProps = defaultProps;

Input.Intent = Intent;
Input.Size = Size;
Input.Type = InputType;

export {
  Input,
};
