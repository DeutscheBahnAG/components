import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './button';

const DummyIcon = () => <svg className="db-icon" />;

describe('Button Component', () => {
  it('should render a button', () => {
    const { container } = render(<Button>My button 1</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('My button 1');
    expect(container).toMatchSnapshot();
  });

  it('should render a submit button', () => {
    const { container } = render(<Button type="submit">My button 2</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    const { container } = render(<Button variant="secondary">My button 3</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a full-width button', () => {
    const { container } = render(<Button fullWidth>My button 4</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a button with additional attributes', () => {
    const { container } = render(<Button title="Click me">My button 5</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a button with additional classes', () => {
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

  it('should render a Button with an Icon on the left side', () => {
    const { container } = render(<Button icon={<DummyIcon />}>My button 10</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should a Button with an Icon on the right side', () => {
    const { container } = render(
      <Button icon={<DummyIcon />} iconPosition="after">
        My button 11
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should not add an icon position class name when no icon is used', () => {
    const { container } = render(<Button>My button 12</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should not add an icon position class name in icon-only Buttons', () => {
    const { container } = render(
      <>
        <Button icon={<DummyIcon />} shape="round">
          My button 13
        </Button>
        <Button icon={<DummyIcon />} shape="square">
          My button 14
        </Button>
      </>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a link if both href and onClick are defined', () => {
    const { container } = render(
      <Button href="/" onClick={() => {}}>
        My button 15
      </Button>
    );
    expect(container).toMatchSnapshot();
  });
});
