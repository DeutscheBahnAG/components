import React from 'react';
import { shallow } from 'enzyme';
import Select from './select';

describe('Select Component', () => {
  it('should render a select', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.find('.dbx-select select')).toHaveLength(1);
  });

  it('should render a disabled select', () => {
    const wrapper = shallow(<Select disabled />);
    expect(wrapper.find('.dbx-select[disabled]')).toHaveLength(1);
    expect(wrapper.find('select[disabled]')).toHaveLength(1);
  });
});
