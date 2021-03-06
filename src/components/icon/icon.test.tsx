import * as React from 'react';
import * as enzyme from 'enzyme';

import { ThemeProvider } from '../../theme';
import { Icon } from './icon';
import { IIconProps } from './props';

const setup = () => {
  const props:IIconProps = {
    icon: Icon.Type.alarmClock,
    intent: Icon.Intent.ERROR,
    disabled: true,
    size: Icon.Size.LARGE,
    onClick: (event) => { console.log(event); },
  };

  const wrapper = enzyme.mount(
    <ThemeProvider>
      <Icon {...props} />
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
  });

  test('should have no children', () => {
    expect(wrapper.props().children).toBeFalsy();
  });

  test('check prop types', () => {
    expect(typeof wrapper.prop('icon')).toBe('string');
    expect(typeof wrapper.prop('intent')).toBe('string');
    expect(typeof wrapper.prop('disabled')).toBe('boolean');
    expect(typeof wrapper.prop('size')).toBe('string');
    expect(typeof wrapper.prop('onClick')).toBe('function');
  });
});
