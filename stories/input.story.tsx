import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  StoryWrapper,
  IStoryWrapperProps,
} from './wrapper';
import {
  Icon,
  Input,
  IInputProps,
} from '../src';

const wrapperProps:IStoryWrapperProps = {
  width: '30%',
};

const LEFT = () => (
  <Icon
    icon={Icon.Type.lock}
    intent={Icon.Intent.DEFAULT}
  />
);

const RIGHT = () => (
  <Icon
    icon={Icon.Type.close}
    intent={Icon.Intent.DEFAULT}
  />
);

const inputProps:IInputProps = {
  leftElement: <LEFT />,
  rightElement: <RIGHT />,
  disabled: true,
  placeholder: 'Type something...',
  intent: Input.Intent.SUCCESS,
  size: Input.Size.DEFAULT,
  elevated: true,
  onChange: (event, data) => { console.log(event, data); },
};

const stories = storiesOf('Input', module);

stories.add('default', () => (
  <StoryWrapper
    {...wrapperProps}
  >
    <Input
      {...inputProps}
    />
  </StoryWrapper>
));