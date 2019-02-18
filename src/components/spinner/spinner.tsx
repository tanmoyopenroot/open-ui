import * as React from 'react';
import classnames from 'classnames';

import { DISPLAY_NAME_PREFIX } from 'common/info';
import { SpinnerType } from 'common/constants';
import { IProps, HTMLDivProps } from 'common/props';

export interface ISpinnerProps extends IProps, HTMLDivProps {
  spinnerType: SpinnerType;
  style?: Object;
}

export class Spinner extends React.PureComponent<ISpinnerProps> {
  public static displayName = `${DISPLAY_NAME_PREFIX}.Spinner`;
  public static TYPE = SpinnerType;
  public static defaultProps: ISpinnerProps = {
    spinnerType: SpinnerType.SMALL,
  };

  public render() {
    const {
      className,
      style,
      spinnerType,
      ...htmlProps
    } = this.props;

    return (
      <div
        className={className}
        style={style}
        {...htmlProps}
      />
    );
  }
}
