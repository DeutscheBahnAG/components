import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './button';

describe('Button Component', () => {
  it('should render a button', () => {
    const { container } = render(<Button>My button 1</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('My button 1');
    expect(container).toMatchSnapshot();
  });

  it('should render a submit button', () => {
    const { container } = render(<Button type={Button.types.SUBMIT}>My button 2</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    const { container } = render(<Button variant={Button.variants.SECONDARY}>My button 3</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a full-width button', () => {
    const { container } = render(<Button fullWidth>My button 4</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a button with addional attributes', () => {
    const { container } = render(<Button title="Click me">My button 5</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a button with addional classes', () => {
    const { container } = render(<Button className="my-class">My button 6</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a button when `href` is not set', () => {
    const { container } = render(<Button>My button 7</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render an anchor when `href` is set', () => {
    const { container } = render(<Button href="#">My button 8</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a button with custom `aria-label`', () => {
    const { container } = render(
      <Button aria-label="This is a custom aria-label">My button 9</Button>
    );
    expect(container).toMatchSnapshot();
  });
});
