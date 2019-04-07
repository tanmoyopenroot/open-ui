import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { Size } from 'common/size';
import {
  useThemeStore,
  useJSS,
} from 'theme';
import toggleStyles from './toggle.styles';
import {
  IToggle,
  ToggleType,
  IToggleProps,
} from './props';

const toggle: IToggle<IToggleProps> = (props) => {
  const {
    className,
    defaultChecked,
    disabled,
    label,
    type,
    name,
    onChange,
  } = props;

  const [theme] = useThemeStore();
  const [classes] = useJSS(
    toggleStyles(props)(theme),
    [theme, props],
  );

  const [checked, setChecked] = React.useState(() => {
    return defaultChecked || false;
  });

  const handleChange = () => {
    if (!disabled) {
      setChecked(!checked);
      onChange(!checked);
    }
  };

  const combinedClasses = classnames(
    className,
    classes.label,
  );

  const indicator = classnames(
    classes.indicator,
    { [classes.indicatorActive]: checked },
  );

  return (
    <label
      className={combinedClasses}
    >
      <div
        className={classes.wrapper}
      >
        <input
          hidden={true}
          name={name}
          checked={checked}
          onChange={handleChange}
          type={type}
        />
        <span
          className={indicator}
        />
      </div>
      <div
        className={classes.text}
      >
        {label}
      </div>
    </label>
  );
};

toggle.displayName = `${DISPLAY_NAME_PREFIX}.Toggle`;
toggle.Type = ToggleType;
toggle.Size = Size;

toggle.defaultProps = {
  type: ToggleType.CHECKBOX,
  size: Size.DEFAULT,
};

export {
  toggle as Toggle,
};
