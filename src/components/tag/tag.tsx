import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { Intent } from 'common/intent';
import { Size } from 'common/size';
import { Icon } from 'components';
import {
  useThemeStore,
  useJSS,
} from 'theme';
import tagStyles from './tag.styles';
import {
  ITag,
  ITagProps,
} from './props';

const tag: ITag<ITagProps> = (props) => {
  const {
    className,
    value,
    disabled,
    onClose,
    intent,
    size,
  } = props;

  const [theme] = useThemeStore();
  const [classes] = useJSS(
    tagStyles(props)(theme),
    [theme, props],
  );

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled && onClose) {
      onClose(value);
    }
  };

  const wrapper = classnames(
    className,
    classes.wrapper,
  );

  {onClose &&
    (
      <div
        className={classes.actions}
      >
        <Icon
          onClick={handleClose}
          icon={Icon.Type.close}
          size={size}
          intent={intent}
        />
      </div>
    )
  }

  return (
    <div
      className={wrapper}
    >
      <div
        className={classes.label}
      >
        {value.label}
      </div>
      {onClose && (
        <div
          className={classes.actions}
        >
          <Icon
            onClick={handleClose}
            icon={Icon.Type.close}
            size={size}
            intent={intent}
          />
        </div>
      )}
    </div>
  );
};

tag.displayName = `${DISPLAY_NAME_PREFIX}.Tag`;
tag.Intent = Intent;
tag.Size = Size;

tag.defaultProps = {
  intent: Intent.DEFAULT,
  size: Size.DEFAULT,
  disabled: false,
};

export {
  tag as Tag,
};
