import React from 'react';
import { mount } from 'enzyme';
import Passwordfield from './passwordfield-doc';

const noopFn = () => {};

describe('Passwordfield component', () => {
  it('should render a text input', () => {
    const wrapper = mount(<Passwordfield value="test123" onChange={noopFn} />);
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
  });

  it('should disable the text input and the button', () => {
    const wrapper = mount(<Passwordfield disabled value="test123" />);
    const field = wrapper.find('input[type="password"]');
    expect(field).toHaveLength(1);
    expect(field.prop('disabled')).toBe(true);
    expect(wrapper.find('.dbx-button--disabled')).toHaveLength(1);
  });

  it('should disable the button when the value is empty', () => {
    const wrapper = mount(<Passwordfield value="" />);
    expect(wrapper.find('.dbx-button--disabled')).toHaveLength(1);
  });

  it('should enable the button when the value is set', () => {
    const wrapper = mount(<Passwordfield value="test123" />);
    expect(wrapper.find('.dbx-button:not(.dbx-button--disabled)')).toHaveLength(1);
  });
});
