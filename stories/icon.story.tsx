import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  StoryWrapper,
  IStoryWrapperProps,
} from './wrapper';
import {
  Icon,
  IIconProps,
} from '../src';

const wrapperProps:IStoryWrapperProps = {
  width: '30%',
};

const props:IIconProps = {
  icon: Icon.Value.alarmClock,
  intent: Icon.Intent.ERROR,
  disabled: true,
  size: Icon.Size.LARGE,
};

const stories = storiesOf('Icon', module);

stories.add('default', () => (
  <StoryWrapper
    {...wrapperProps}
  >
    <Icon
      {...props}
    />
  </StoryWrapper>
));
