import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { Elevation } from 'common/elevation';
import { IProps, HTMLDivProps } from 'common/props';
import { ITheme } from 'theme';

export interface ICardProps extends IProps, HTMLDivProps {
  elevation: Elevation;
  style?: Object;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const getStyles = (props: ICardProps) => (theme: ITheme) => ({
  CARD: {
    boxShadow: theme.elevations[props.elevation],
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
});

export class Card extends React.PureComponent<ICardProps> {
  private theme: ITheme;
  public static displayName = `${DISPLAY_NAME_PREFIX}.Card`;
  public static ELEVATION = Elevation;
  public static defaultProps: ICardProps = {
    elevation: Elevation.ZERO,
  };

  constructor(props: ICardProps) {
    super(props);
    if (!window || !window.__theme__) {
      throw new Error(
        `Need to set theme before using ${Card.displayName} component`,
      );
    }
    this.theme = window.__theme__;
  }

  public render() {
    const {
      className,
      elevation,
      style,
      ...htmlProps
    } = this.props;

    const styles = getStyles(this.props)(this.theme);

    return (
      <div
        className={className}
        style={styles.CARD}
        {...htmlProps}
      />
    );
  }
}
