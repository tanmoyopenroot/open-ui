import * as React from 'react';

import {DISPLAY_NAME_PREFIX } from 'common/info';
import {
  Elevation,
  TElevation,
} from 'common/elevation';
import {
  IProps,
  HTMLDivProps,
} from 'common/props';
import {
  ITheme,
  useThemeStore,
} from 'theme';

const getStyles = (props: ICardProps) => (theme: ITheme) => ({
  CARD: {
    boxShadow: theme.elevations[props.elevation],
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
});

interface ICard<P = {}> extends React.FunctionComponent<P> {
  ELEVATION: TElevation;
}

export interface ICardProps extends IProps, HTMLDivProps {
  elevation: Elevation;
  style?: Object;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Card: ICard<ICardProps> = (props) => {
  const {
    className,
    elevation,
    style,
    ...htmlProps
  } = props;

  const [theme] = useThemeStore();
  const styles = getStyles(props)(theme);

  return (
    <div
      className={className}
      style={styles.CARD}
      {...htmlProps}
    />
  );
};

Card.displayName = `${DISPLAY_NAME_PREFIX}.Card`;
Card.ELEVATION = Elevation;

Card.defaultProps = {
  elevation: Elevation.ZERO,
};
