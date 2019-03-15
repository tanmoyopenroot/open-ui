import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  StoryWrapper,
  IStoryWrapperProps,
} from './wrapper';
import {
  Button,
  IButtonProps,
} from '../src';

const wrapperProps:IStoryWrapperProps = {
  width: '30%',
};

const props:IButtonProps = {
  intent: Button.Intent.PRIMARY,
  size: Button.Size.DEFAULT,
  icon: Button.Icon.alarmClock,
  // outlined: true,
  disabled: true,
};

const stories = storiesOf('Button', module);

stories.add('default', () => (
  <StoryWrapper
    {...wrapperProps}
  >
    <Button
      {...props}
    >
      Clickable Button
    </Button>
  </StoryWrapper>
));