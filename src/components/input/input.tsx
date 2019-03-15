import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { useThemeStore } from 'theme';
import { Intent } from 'common/intent';
import { Size } from 'common/size';

import inputStyles from './input.styles';
import {
  Type,
  IInput,
  IInputProps,
} from './props';

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
  const [classes, setClasses] = React.useState(() => {
    const { createSheet } = inputStyles(props)(theme);
    return createSheet();
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event, event.currentTarget.value);
    }
  };

  React.useEffect(
    () => {
      const {
        createSheet,
        removeSheet,
      } = inputStyles(props)(theme);

      setClasses(createSheet());
      return () => {
        removeSheet();
      };
    },
    [theme, props],
  );

  const wrapper = classnames(
    className,
    classes.wrapper,
    { [classes.elevated]: elevated },
  );

  return (
    <div
      className={wrapper}
    >
      {leftElement && <div className={classes.leftElement}>{leftElement}</div>}
      <input
        className={classes.input}
        placeholder={placeholder}
        value={defaultValue}
        disabled={disabled}
        onChange={handleChange}
        type={type}
      />
      {rightElement && <div className={classes.rightElement}>{rightElement}</div>}
    </div>
  );
};

input.displayName = `${DISPLAY_NAME_PREFIX}.Input`;
input.Intent = Intent;
input.Size = Size;
input.Type = Type;

input.defaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
  type: Type.TEXT,
};

export {
  input as Input,
};
