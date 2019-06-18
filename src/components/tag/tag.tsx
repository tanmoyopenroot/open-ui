import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';
import tagStyles from './tag.styles';
import {
  useTheme,
  useClasses,
} from '../../common/hooks';
import {
  Icon,
  IIconProps,
} from '../../components';
import {
  ITag,
  ITagProps,
  DefaultProps,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Tag`;
const defaultProps: DefaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
  disabled: false,
};

const MemoizedIcon = React.memo((props: IIconProps) => (
  <Icon
    onClick={props.onClick}
    icon={Icon.Type.close}
    size={props.size}
    intent={props.intent}
  />
));

const Tag: ITag<ITagProps> = (props) => {
  const {
    className,
    value,
    disabled,
    onClose,
    intent,
    size,
  } = props;

  const [theme] = useTheme();
  const [classes] = useClasses(
    () => tagStyles(props, theme),
    [theme.type, props],
  );

  const handleClose = React.useCallback(
    () => {
      if (!disabled && onClose) {
        onClose(value);
      }
    },
    [disabled],
  );

  return (
    <div
      className={classnames(
        className,
        classes.wrapper,
      )}
    >
      <div className={classes.label}>
        {value.label}
      </div>
      {onClose && (
        <div className={classes.actions}>
          <MemoizedIcon
            onClick={handleClose}
            size={size}
            intent={intent}
          />
        </div>
      )}
    </div>
  );
};

Tag.displayName = displayName;
Tag.defaultProps = defaultProps;

Tag.Intent = Intent;
Tag.Size = Size;

export {
  Tag,
};
