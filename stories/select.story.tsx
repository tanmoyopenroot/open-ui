import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  StoryWrapper,
  IStoryWrapperProps,
} from './wrapper';
import {
  Select,
  ISelectProps,
  ISelectOption,
} from '../src';

const wrapperProps:IStoryWrapperProps = {
  width: '30%',
};

const defaultValue: ISelectOption[] = [
  { value: 'A', label: 'Chocolate' },
  { value: 'B', label: 'Strawberry' },
  { value: 'C', label: 'Chocolate' },
  { value: 'D', label: 'Strawberry' },
  { value: 'E', label: 'Chocolate' },
  { value: 'F', label: 'Strawberry' },
];

const options: ISelectOption[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const props:ISelectProps = {
  options,
  defaultValue,
  onChange: (data) => { console.log(data); },
};

storiesOf('Select', module)
  .add('default', () => (
    <StoryWrapper {...wrapperProps}>
      <Select {...props} />
    </StoryWrapper>
  ));
