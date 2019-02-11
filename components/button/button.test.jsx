import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button Component', () => {
  it('should render a button', () => {
    const wrapper = shallow(<Button>Text</Button>);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
