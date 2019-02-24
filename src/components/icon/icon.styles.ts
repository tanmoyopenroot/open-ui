import jss from 'jss';

import { ITheme } from 'theme';
import { Intent } from 'common/intent';
import { Size } from 'common/size';

import { IIconProps } from './props';

export default (props: IIconProps) => (theme: ITheme) => {
  const getIntent = () => {
    if (props.disabled) {
      return {
        color: theme.palette.disabled,
      };
    }

    switch (props.intent) {
      case Intent.PRIMARY:
        return {
          color: theme.palette.primary,
        };
      case Intent.SECONDARY:
        return {
          color: theme.palette.secondary,
        };
      case Intent.ERROR:
        return {
          color: theme.palette.error,
        };
      default:
        return {
          color: theme.palette.colors.Black.default,
        };
    }
  };

  const getSize = () => {
    switch (props.size) {
      case Size.SMALL:
        return {
          fontSize: '90%',
        };
      case Size.LARGE:
        return {
          fontSize: '200%',
        };
      default:
        return {
          fontSize: '120%',
        };
    }
  };

  return jss
    .createStyleSheet({
      icon: {
        ...getIntent(),
        ...getSize(),
      },
    })
    .attach();
};
