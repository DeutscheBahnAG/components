import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button Component', () => {
  it('should render a button', () => {
    const wrapper = shallow(<Button>Text</Button>);
    expect(wrapper.find('button.dbx-button--primary[type="button"]')).toHaveLength(1);
  });

  it('should render a submit button', () => {
    const wrapper = shallow(<Button type="submit">Text</Button>);
    expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
  });

  it('should render a secondary button', () => {
    const wrapper = shallow(<Button variant="secondary">Text</Button>);
    expect(wrapper.find('button.dbx-button--secondary')).toHaveLength(1);
  });

  it('should render a full-width button', () => {
    const wrapper = shallow(<Button fullWidth>Text</Button>);
    expect(wrapper.find('button.dbx-button--block')).toHaveLength(1);
  });

  it('should render a button with addional attributes', () => {
    const wrapper = shallow(<Button title="Click me">Text</Button>);
    expect(wrapper.find('button[title="Click me"]')).toHaveLength(1);
  });

  it('should render a button with addional classes', () => {
    const wrapper = shallow(<Button className="my-class">Text</Button>);
    expect(wrapper.find('button.my-class.dbx-button--primary')).toHaveLength(1);
  });

  it('should render a button when `href` is not set', () => {
    const wrapper = shallow(<Button>Text</Button>);
    expect(wrapper.find('button.dbx-button[type="button"]')).toHaveLength(1);
  });

  it('should render an anchor when `href` is set', () => {
    const wrapper = shallow(<Button href="#">Text</Button>);
    expect(wrapper.find('a.dbx-button[href="#"]')).toHaveLength(1);
  });
});
