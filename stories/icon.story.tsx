import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Icon,
  IIconProps,
  Toggle,
  Story,
} from '../src';

interface IIconExamplePState {
  disabled: boolean;
}

class IconExample extends React.PureComponent<{}, IIconExamplePState> {
  public state: IIconExamplePState = {
    disabled: false,
  };

  handleDisableChange = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  getController = () => {
    const { disabled } = this.state;

    return (
      <React.Fragment>
        <Toggle
          defaultChecked={disabled}
          label="Disabled"
          onChange={this.handleDisableChange}
        />
      </React.Fragment>
    );
  }

  public render () {
    const { disabled } = this.state;
    const controller = this.getController();

    const props:IIconProps = {
      disabled,
      icon: Icon.Type.alarmClock,
      intent: Icon.Intent.ERROR,
      size: Icon.Size.LARGE,
      onClick: (event) => { console.log(event); },
    };

    return (
      <Story
        controller={controller}
      >
        <Icon
          {...props}
        />
      </Story>
    );
  }
}

const stories = storiesOf('Icon', module);

stories.add('default', () => (
  <IconExample />
));
