import React from 'react';
import { shallow } from 'enzyme';
import Transportchip from './transportchip';

describe('Transportchip Component', () => {
  it('should split S 1', () => {
    const wrapper = shallow(<Transportchip name="S 1" />);
    expect(wrapper.find('.dbx-transportchip .dbx-transportchip__text')).toHaveLength(2);
  });

  it('should split S1', () => {
    const wrapper = shallow(<Transportchip name="S1" />);
    expect(wrapper.find('.dbx-transportchip .dbx-transportchip__text')).toHaveLength(2);
  });

  it('should not split Bus 1', () => {
    const wrapper = shallow(<Transportchip name="Bus 1" />);
    expect(wrapper.find('.dbx-transportchip .dbx-transportchip__text')).toHaveLength(1);
  });

  it('should detect the train type S-Bahn from S 1', () => {
    const wrapper = shallow(<Transportchip name="S 1" />);
    expect(wrapper.find('.dbx-transportchip__line.dbx-transportchip--suburban')).toHaveLength(1);
  });

  it('should detect the train type S-Bahn from S1', () => {
    const wrapper = shallow(<Transportchip name="S1" />);
    expect(wrapper.find('.dbx-transportchip__line.dbx-transportchip--suburban')).toHaveLength(1);
  });

  it('should detect the train type S-Bahn from Bus 1', () => {
    const wrapper = shallow(<Transportchip name="Bus 1" />);
    expect(wrapper.find('.dbx-transportchip__line.dbx-transportchip--bus')).toHaveLength(1);
  });

  it('should allow setting the transport type manually', () => {
    const wrapper = shallow(<Transportchip product={Transportchip.products.BUS} name="U 1" />);
    expect(wrapper.find('.dbx-transportchip__line.dbx-transportchip--bus')).toHaveLength(1);
  });
});
