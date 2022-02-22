import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Passwordfield from './passwordfield-doc';

const noopFn = () => {};

describe('Passwordfield component', () => {
  it('should render a text input', () => {
    const { container } = render(<Passwordfield value="test123" onChange={noopFn} />);
    expect(screen.getByDisplayValue('test123')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should disable the text input and the button', () => {
    const { container } = render(<Passwordfield disabled value="test456" />);
    const field = screen.getByDisplayValue('test456');
    const button = screen.getByRole('button');
    expect((field as HTMLInputElement).disabled).toBe(true);
    expect((button as HTMLButtonElement).disabled).toBe(true);
    expect(container).toMatchSnapshot();
  });

  it('should disable the button when the value is empty', () => {
    const { container } = render(<Passwordfield value="" />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('should enable the button when the value is set', () => {
    const { container } = render(<Passwordfield value="filled" />);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('should pass concealButtonProps to button', () => {
    const { container } = render(
      <Passwordfield value="filled" tabIndex={-1} concealButtonProps={{ tabIndex: -1 }} />
    );
    const field = screen.getByDisplayValue('filled');
    const button = screen.getByRole('button');
    expect(field).toHaveAttribute('tabIndex', '-1');
    expect(button).toHaveAttribute('tabIndex', '-1');
    expect(container).toMatchSnapshot();
  });

  it('svg should be hidden and must not be role="img" without a title', () => {
    render(<Passwordfield value="filled" />);
    const button = screen.getByRole('button');
    expect(button.querySelector('svg')).not.toHaveAttribute('role', 'img');
    button.click();
    expect(button.querySelector('svg')).not.toHaveAttribute('role', 'img');
  });
});
