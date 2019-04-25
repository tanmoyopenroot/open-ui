import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  StoryWrapper,
  IStoryWrapperProps,
} from './wrapper';
import {
  Toggle,
  IToggleProps,
} from '../src';

const wrapperProps:IStoryWrapperProps = {
  width: '30%',
};

const props:IToggleProps = {
  label: 'Toogle me',
  // size: Toggle.Size.LARGE,
  defaultChecked: false,
  onChange: (data) => { console.log(data); },
};

storiesOf('Toogle', module)
  .add('default', () => (
    <StoryWrapper {...wrapperProps}>
      <Toggle {...props}/>
    </StoryWrapper>
  ));
