import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Textfield from './textfield';

describe('Textfield Component', () => {
  it('should render a text input', () => {
    const expectedValue = 'My value 1';
    const { container } = render(<Textfield value={expectedValue} onChange={() => {}} />);
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render a number input', () => {
    const expectedValue = '123';
    const { container } = render(
      <Textfield type="number" value={expectedValue} onChange={() => {}} />
    );
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render a textarea', () => {
    const { container } = render(
      <Textfield type="textarea" value="Textarea" onChange={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a disabled textarea', () => {
    const expectedValue = 'My disabled 1';
    const { container } = render(<Textfield type="textarea" disabled value={expectedValue} />);
    expect(screen.getByDisplayValue(expectedValue)).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('should render a disabled input', () => {
    const expectedValue = 'My disabled 2';
    const { container } = render(<Textfield disabled value={expectedValue} />);
    expect(screen.getByDisplayValue(expectedValue)).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('should render a read-only input', () => {
    const { container } = render(<Textfield readOnly value="Read Only" />);
    expect(container).toMatchSnapshot();
  });

  it('should use a prefix', () => {
    const { container } = render(<Textfield prefix="$" value="Text" onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should use a suffix', () => {
    const { container } = render(<Textfield suffix="€" value="Text" onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should use an unit before the field', () => {
    const { container } = render(<Textfield unit="£" value="Text" onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should use an unit after the field', () => {
    const { container } = render(<Textfield unit="€" value="Text" onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
