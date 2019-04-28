import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Size } from '../../common/size';
import toggleStyles from './toggle.styles';
import {
  useTheme,
  useClasses,
} from '../../common/hooks';
import {
  IToggle,
  ToggleType,
  IToggleProps,
  DefaultProps,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Toggle`;
const defaultProps: DefaultProps = {
  type: ToggleType.CHECKBOX,
  size: Size.DEFAULT,
};

const Toggle: IToggle<IToggleProps> = (props) => {
  const {
    className,
    defaultChecked,
    disabled,
    label,
    type,
    name,
    onChange,
  } = props;

  const { theme } = useTheme();
  const { classes } = useClasses(
    toggleStyles(props, theme),
    [theme, props],
  );

  const [checked, setChecked] = React.useState(() => {
    return defaultChecked || false;
  });

  const handleChange = React.useCallback(
    () => {
      if (!disabled) {
        setChecked((currentChecked) => {
          onChange(!currentChecked);
          return !currentChecked;
        });
      }
    },
    [disabled],
  );

  return (
    <label
      className={classnames(
        className,
        classes.label,
      )}
    >
      <div className={classes.wrapper}>
        <input
          hidden={true}
          name={name}
          checked={checked}
          onChange={handleChange}
          type={type}
        />
        <span
          className={classnames(
            classes.indicator,
            { [classes.indicatorActive]: checked },
          )}
        />
      </div>
      <div className={classes.text}>
        {label}
      </div>
    </label>
  );
};

Toggle.displayName = displayName;
Toggle.defaultProps = defaultProps;

Toggle.Type = ToggleType;
Toggle.Size = Size;

export {
  Toggle,
};
