import * as React from 'react';
import * as enzyme from 'enzyme';

import { ThemeProvider } from '../../theme';
import { Card } from './card';
import { ICardProps } from './props';

const setup = () => {
  const props:ICardProps = {
    elevation: Card.Elevation.TWO,
  };

  const wrapper = enzyme.mount(
    <ThemeProvider>
      <Card {...props}>
        <h1>Test Card</h1>
      </Card>
    </ThemeProvider>,
  );

  return {
    props,
    wrapper,
  };
};

describe('<Card />', () => {
  const { wrapper } = setup();

  test('should render <Card /> with its child', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  test('check prop types', () => {
    expect(typeof wrapper.prop('elevation')).toBe('number');
  });
});
