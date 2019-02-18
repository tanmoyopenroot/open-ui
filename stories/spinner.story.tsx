import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { WRAPPER, IWrapperProps } from './wrapper';
import { Spinner, ISpinnerProps } from '../src';

const wrapperProps:IWrapperProps = {
  width: '30%',
};

const props:ISpinnerProps = {
  spinnerType: Spinner.TYPE.SMALL,
};

const stories = storiesOf('Spinner', module);

stories.add('default', () => (
  <WRAPPER
    {...wrapperProps}
  >
    <Spinner
      {...props}
    >
      <h2>
        Content title
      </h2>
      <p>
        Some quick example text to build on the content title and
        make up the bulk of the spinner's content.
      </p>
    </Spinner>
  </WRAPPER>),
);
