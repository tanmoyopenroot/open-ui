import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { useThemeStore } from 'theme';
import cardStyles from './card.styles';
import {
  Elevation,
  TElevation,
} from 'common/elevation';
import {
  IProps,
  HTMLDivProps,
} from 'common/props';

interface ICard<P = {}> extends React.FunctionComponent<P> {
  Elevation: TElevation;
}

export interface ICardProps extends IProps, HTMLDivProps {
  elevation?: Elevation;
  style?: Object;
}

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
