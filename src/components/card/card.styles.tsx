import { ITheme } from 'theme';
import { ICardProps } from './props';

export default (props: ICardProps) => (theme: ITheme): Record<string, object> => ({
  card: {
    position: 'relative' as 'relative',
    boxShadow: theme.elevations[props.elevation!],
    padding: '1.5rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    wordWrap: 'break-word' as 'break-word',
    border: '.0625rem solid rgba(0,0,0,.05)',
    transition: 'all .15s ease',
  },
});
