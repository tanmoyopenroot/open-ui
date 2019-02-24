import jss from 'jss';

import { ITheme } from 'theme';

import { ICardProps } from './props';

export default (props: ICardProps) => (theme: ITheme) => jss
  .createStyleSheet({
    card: {
      boxShadow: theme.elevations[props.elevation!],
      borderRadius: theme.shape.borderRadius * 2,
      padding: theme.spacing.unit * 2,
      backgroundColor: theme.palette.background.paper,
    },
  })
  .attach();
