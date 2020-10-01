import React from 'react';
import { shallow } from 'enzyme';
import Textfield from './textfield';

describe('Textfield Component', () => {
  it('should render a text input', () => {
    const wrapper = shallow(<Textfield value="Text" />);
    expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  });

  it('should render a number input', () => {
    const wrapper = shallow(<Textfield type="number" value="Text" />);
    expect(wrapper.find('input[type="number"]')).toHaveLength(1);
  });

  it('should render a textarea', () => {
    const wrapper = shallow(<Textfield type="textarea" value="Text" />);
    expect(wrapper.find('textarea')).toHaveLength(1);
  });

  it('should render a disabled textarea', () => {
    const wrapper = shallow(<Textfield type="textarea" disabled value="Text" />);
    expect(wrapper.find('.dbx-textfield.dbx-textfield--disabled')).toHaveLength(1);
    expect(wrapper.find('textarea[disabled]')).toHaveLength(1);
  });

  it('should render a disabled input', () => {
    const wrapper = shallow(<Textfield disabled value="Text" />);
    expect(wrapper.find('.dbx-textfield.dbx-textfield--disabled')).toHaveLength(1);
    expect(wrapper.find('input[disabled]')).toHaveLength(1);
  });

  it('should render a read-only input', () => {
    const wrapper = shallow(<Textfield readOnly value="Text" />);
    expect(wrapper.find('.dbx-textfield.dbx-textfield--readonly')).toHaveLength(1);
    expect(wrapper.find('input[readOnly]')).toHaveLength(1);
  });

  it('should use a prefix', () => {
    const wrapper = shallow(<Textfield prefix="$" value="Text" />);
    expect(wrapper.find('.dbx-textfield-prefix')).toHaveLength(1);
  });

  it('should use a suffix', () => {
    const wrapper = shallow(<Textfield suffix="€" value="Text" />);
    expect(wrapper.find('.dbx-textfield-suffix')).toHaveLength(1);
  });

  it('should use an unit before the field', () => {
    const wrapper = shallow(<Textfield unit="£" value="Text" />);
    expect(wrapper.find('.dbx-textfield-prefix')).toHaveLength(1);
  });

  it('should use an unit after the field', () => {
    const wrapper = shallow(<Textfield unit="€" value="Text" />);
    expect(wrapper.find('.dbx-textfield-suffix')).toHaveLength(1);
  });
});
