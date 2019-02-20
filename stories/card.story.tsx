import * as React from 'react';
import { storiesOf } from '@storybook/react';

import {
  StoryWrapper,
  IStoryWrapperProps,
} from './wrapper';
import {
  Card,
  ICardProps,
} from '../src';

const wrapperProps:IStoryWrapperProps = {
  width: '30%',
};

const props:ICardProps = {
  elevation: Card.ELEVATION.TWO,
};

const stories = storiesOf('Card', module);

stories.add('default', () => (
  <StoryWrapper
    {...wrapperProps}
  >
    <Card
      {...props}
    >
      <h2>
        Card title
      </h2>
      <p>
        Some quick example text to build on the card title and
        make up the bulk of the card's content.
      </p>
      <a href="#">Go somewhere</a>
    </Card>
  </StoryWrapper>),
);
