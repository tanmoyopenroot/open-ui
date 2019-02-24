import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { useThemeStore } from 'theme';
import { Elevation } from 'common/elevation';

import cardStyles from './card.styles';
import {
  ICard,
  ICardProps,
} from './props';

const card: ICard<ICardProps> = (props) => {
  const {
    className,
    style,
    ...htmlProps
  } = props;

  const [theme] = useThemeStore();
  const { classes } = cardStyles(props)(theme);

  return (
    <div
      className={`${classes.card} ${className}`}
      {...htmlProps}
    />
  );
};

card.displayName = `${DISPLAY_NAME_PREFIX}.Card`;
card.Elevation = Elevation;

card.defaultProps = {
  className: '',
  elevation: Elevation.ZERO,
};

export {
  card as Card,
};
