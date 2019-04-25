import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  StoryWrapper,
  IStoryWrapperProps,
} from './wrapper';
import {
  Tag,
  ITagProps,
  ITagValue,
} from '../src';

const wrapperProps:IStoryWrapperProps = {
  width: '30%',
};

const value: ITagValue = {
  value: 'chocolate',
  label: 'Chocolate',
};

const props: ITagProps = {
  value,
  intent: Tag.Intent.SUCCESS,
  size: Tag.Size.SMALL,
  // disabled: true,
  onClose: (data) => { console.log(data); },
};

storiesOf('Tag', module)
  .add('default', () => (
    <StoryWrapper {...wrapperProps}>
      <Tag {...props}/>
    </StoryWrapper>
));
