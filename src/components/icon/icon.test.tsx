import * as React from 'react';
import * as enzyme from 'enzyme';

import {
  Icon,
  IIconProps,
} from 'components';
import { createThemeStore } from 'theme';

const setup = () => {
  createThemeStore();

  const props:IIconProps = {
    icon: Icon.Value.alarmClock,
    intent: Icon.Intent.ERROR,
    disabled: true,
    size: Icon.Size.LARGE,
  };

  const wrapper = enzyme.mount(
    <Icon
      {...props}
    />
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
    expect(wrapper.children().children().exists()).toBeFalsy();
  });

  test('check prop types', () => {
    expect(typeof wrapper.prop('icon')).toBe('string');
    expect(typeof wrapper.prop('intent')).toBe('string');
    expect(typeof wrapper.prop('disabled')).toBe('boolean');
    expect(typeof wrapper.prop('size')).toBe('string');
  });
});
