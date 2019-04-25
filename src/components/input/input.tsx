import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';
import {
  useThemeStore,
  useJSS,
} from '../../theme';
import inputStyles from './input.styles';
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

const input: IInput<IInputProps> = (props) => {
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

  const [theme] = useThemeStore();
  const [classes] = useJSS(
    inputStyles(props, theme),
    [theme, props],
  );

  const handleChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange(event, event.currentTarget.value);
      }
    },
    [disabled],
  );

  const wrapper = classnames(
    className,
    classes.wrapper,
    { [classes.elevated]: elevated },
  );

  const leftNode = (
    <div className={classes.leftElement}>
      {leftElement}
    </div>
  );

  const rightNode = (
    <div className={classes.rightElement}>
      {rightElement}
    </div>
  );

  return (
    <div className={wrapper}>
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

input.displayName = displayName;
input.defaultProps = defaultProps;

input.Intent = Intent;
input.Size = Size;
input.Type = InputType;

export {
  input as Input,
};
