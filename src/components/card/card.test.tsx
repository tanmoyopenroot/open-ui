import * as React from 'react';
import * as enzyme from 'enzyme';

import {
  Card,
  ICardProps,
} from 'components';
import { createThemeStore } from 'theme';

const setup = () => {
  createThemeStore();

  const props:ICardProps = {
    elevation: Card.Elevation.TWO,
  };

  const wrapper = enzyme.mount(
    <Card
      {...props}
    >
      <h1>Test Card</h1>
    </Card>,
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
