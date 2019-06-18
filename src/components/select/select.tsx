import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import useSelectState from './useSelectState';
import selectStyles from './select.styles';
import {
  useTheme,
  useFocus,
  useClasses,
  useClickOutside,
} from '../../common/hooks';
import {
  Icon,
  Tag,
  ITagProps,
} from '../../components';
import {
  ISelect,
  ISelectProps,
  DefaultProps,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Select`;
const defaultProps: DefaultProps = {
  defaultValue: [],
  searchable: false,
  disabled: false,
  multiple: false,
  clearable: true,
};

const MemoizedIcon = React.memo(() => (
  <Icon
    icon={Icon.Type.close}
    intent={Icon.Intent.DEFAULT}
  />
));

const MemoizedTag = (props: ITagProps) => React.useMemo(
  () => (
    <Tag
      value={props.value}
      size={Tag.Size.SMALL}
    />
  ),
  [props.value],
);

const Select: ISelect<ISelectProps> = (props) => {
  const {
    defaultValue = [],
    options,
    clearable,
    className,
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useFocus(inputRef);
  const [theme] = useTheme();
  const [classes] = useClasses(
    () => selectStyles(props, theme),
    [theme.type, props],
  );
  const {
    selectedValues,
    setSelectedValues,
  } = useSelectState({
    focus: false,
    selectedValues: defaultValue,
  });
  const [containerRef] = useClickOutside(() => setFocus(false));

  return (
    <div
      className={className}
      ref={containerRef}
    >
      <div
        className={classnames(
          classes.selectController,
          { [classes.inputFocused]: focus },
        )}
      >
        <div className={classes.selectedDataContainer}>
          {selectedValues && selectedValues.map(data => (
            <MemoizedTag
              key={`${data.value}`}
              value={data}
            />
          ))}
          <input
            className={classes.input}
            ref={inputRef}
          />
        </div>
        {clearable && (
          <div className={classes.actions}>
            <MemoizedIcon />
          </div>
        )}
      </div>
      {focus && options.length && (
        <div className={classes.dropdownList}>
          {options.map(option => (
            <div
              key={option.value}
              className={classes.label}
              onClick={setSelectedValues(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Select.displayName = displayName;
Select.defaultProps = defaultProps;

export {
  Select,
};
