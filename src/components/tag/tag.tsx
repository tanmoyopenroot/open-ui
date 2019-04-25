import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Intent } from '../../common/intent';
import { Size } from '../../common/size';
import { Icon } from '../../components';
import {
  useThemeStore,
  useJSS,
} from '../../theme';
import tagStyles from './tag.styles';
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
    tagStyles(props, theme),
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

  const actionWrapper = (
    <div className={classes.actions}>
      <Icon
        onClick={handleClose}
        icon={Icon.Type.close}
        size={size}
        intent={intent}
      />
    </div>
  );

  return (
    <div className={wrapper}>
      <div className={classes.label}>
        {value.label}
      </div>
      {onClose && actionWrapper}
    </div>
  );
};

tag.displayName = displayName;
tag.defaultProps = defaultProps;

tag.Intent = Intent;
tag.Size = Size;

export {
  tag as Tag,
};
