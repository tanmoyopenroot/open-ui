import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { Elevation } from '../../common/elevation';
import cardStyles from './card.styles';
import {
  useTheme,
  useClasses,
} from '../../common/hooks';
import {
  ICard,
  ICardProps,
  DefaultProps,
} from './props';

const displayName: string = `${DISPLAY_NAME_PREFIX}.Card`;
const defaultProps: DefaultProps = {
  elevation: Elevation.ZERO,
};

const Card: ICard<ICardProps> = (props) => {
  const {
    className,
    style,
    ...htmlProps
  } = props;

  const [theme] = useTheme();
  const [classes] = useClasses(
    () => cardStyles(props, theme),
    [theme.type, props],
  );

  return (
    <div
      className={classnames(
        className,
        classes.card,
      )}
      {...htmlProps}
    />
  );
};

Card.displayName = displayName;
Card.defaultProps = defaultProps;

Card.Elevation = Elevation;

export {
  Card,
};
