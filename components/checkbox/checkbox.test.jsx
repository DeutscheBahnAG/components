import React from 'react';
import { mount } from 'enzyme';
import Checkbox from './checkbox';

describe('Checkbox component', () => {
  it('should render a Checkbox', () => {
    const wrapper = mount(<Checkbox label="Text" />);
    expect(wrapper.find('.dbx-checkbox')).toHaveLength(1);
  });
});
