import React from 'react';
import { shallow } from 'enzyme';
import Passwordfield from './passwordfield';

const noopFn = () => { };

describe('Passwordfield component', () => {
  it('should render a text input', () => {
    const wrapper = shallow(<Passwordfield value="test123" onChange={noopFn} />);
    expect(wrapper.find('[type="password"]')).toHaveLength(1);
  });

  it('should disable the text input and the button', () => {
    const wrapper = shallow(<Passwordfield value="test123" />);
    expect(wrapper.find('[type="password"][disabled]')).toHaveLength(1);
    expect(wrapper.find('.dbx-button--disabled')).toHaveLength(1);
  });

  it('should disable the button when the value is empty', () => {
    const wrapper = shallow(<Passwordfield value="" />);
    expect(wrapper.find('.dbx-button--disabled')).toHaveLength(1);
  });

  it('should enable the button when the value is set', () => {
    const wrapper = shallow(<Passwordfield value="test123" />);
    expect(wrapper.find('.dbx-button:not(.dbx-button--disabled)')).toHaveLength(1);
  });
});
