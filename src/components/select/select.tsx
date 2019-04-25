import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import {
  useThemeStore,
  useJSS,
} from '../../theme';
import {
  Icon,
  Tag,
} from '../../components';

import selectStyles from './select.styles';
import {
  ISelect,
  ISelectProps,
  DefaultProps,
  ISelectOption,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Select`;
const defaultProps: DefaultProps = {
  defaultValue: [],
  searchable: false,
  disabled: false,
  multiple: false,
  clearable: true,
};

const select: ISelect<ISelectProps> = (props) => {
  const {
    defaultValue = [],
    options,
    clearable,
    disabled,
    className,
  } = props;

  const [theme] = useThemeStore();
  const [classes] = useJSS(
    selectStyles(props, theme),
    [theme, props],
  );
  const [focused, setFocus] = React.useState(false);

  const handleInputFocus = (event: React.FormEvent<HTMLInputElement>) => {
    if (!disabled) {
      console.log(focused);
      setFocus(!focused);
    }
  };

  const logs = (data: ISelectOption) => {
    console.log(data);
  };

  const getDefaultValues = () => {
    return defaultValue.map(data => (
      <Tag
        key={`${data.value}`}
        value={data}
        size={Tag.Size.SMALL}
        onClose={logs}
      />
    ));
  };

  const clearableNode = (
    <div className={classes.actions}>
      <Icon
        icon={Icon.Type.close}
        intent={Icon.Intent.DEFAULT}
      />
    </div>
  );

  /* tslint:disable */
  const getOptions = () => (
    <div className={classes.dropdownList}>
      {options.map(option => (
        <div
          className={classes.label}
          key={option.value}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
  /* tslint:enable */

  return (
    <div className={className}>
      <div className={classes.selectController}>
        <div className={classes.selectedDataContainer}>
          {defaultValue && getDefaultValues()}
          <input
            className={classes.input}
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
          />
        </div>
        {clearable && clearableNode}
      </div>
      {focused && options.length && getOptions()}
    </div>
  );
};

select.displayName = displayName;
select.defaultProps = defaultProps;

export {
  select as Select,
};
