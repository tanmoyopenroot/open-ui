import * as React from 'react';
import * as enzyme from 'enzyme';

import { ThemeProvider } from '../../theme';
import { Input } from './input';
import { IInputProps } from './props';

const setup = () => {
  const props:IInputProps = {
    placeholder: 'Type something...',
    intent: Input.Intent.SUCCESS,
    size: Input.Size.DEFAULT,
    elevated: true,
    onChange: (event, data) => { console.log(event, data); },
  };

  const wrapper = enzyme.mount(
    <ThemeProvider>
      <Input {...props} />
    </ThemeProvider>,
  );

  return {
    props,
    wrapper,
  };
};

describe('<Input />', () => {
  const { wrapper } = setup();

  test('should render <Input /> with its child', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });

  test('should have no children', () => {
    expect(wrapper.props().children).toBeFalsy();
  });

  test('check prop types', () => {
    expect(typeof wrapper.prop('placeholder')).toBe('string');
    expect(typeof wrapper.prop('intent')).toBe('string');
    expect(typeof wrapper.prop('size')).toBe('string');
    expect(typeof wrapper.prop('elevated')).toBe('boolean');
    expect(typeof wrapper.prop('onChange')).toBe('function');
  });
});
