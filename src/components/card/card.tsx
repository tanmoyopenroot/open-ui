import * as React from 'react';
import classnames from 'classnames';

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
  const [classes, setClasses] = React.useState(() => {
    const { createSheet } = cardStyles(props)(theme);
    return createSheet();
  });

  React.useEffect(
    () => {
      const {
        createSheet,
        removeSheet,
      } = cardStyles(props)(theme);

      setClasses(createSheet());
      return () => {
        removeSheet();
      };
    },
    [theme, props],
  );

  const combinedClasses = classnames(
    className,
    classes.card,
  );

  return (
    <div
      className={combinedClasses}
      {...htmlProps}
    />
  );
};

card.displayName = `${DISPLAY_NAME_PREFIX}.Card`;
card.Elevation = Elevation;

card.defaultProps = {
  elevation: Elevation.ZERO,
};

export {
  card as Card,
};
