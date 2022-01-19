import * as React from 'react';
import { render } from '@testing-library/react';

import Radiobutton from './radiobutton';

describe('<Radiobutton />', () => {
  it('renders a radio input', () => {
    const { baseElement } = render(<Radiobutton>Radiobutton Label Text</Radiobutton>);
    const radioInput = baseElement.querySelector('input[type="radio"]');
    expect(radioInput).toBeInTheDocument();
  });

  it('renders its children inside the input label', () => {
    const { queryByLabelText } = render(<Radiobutton>Radiobutton Label Text</Radiobutton>);
    expect(queryByLabelText('Radiobutton Label Text')).toBeInTheDocument();
  });

  it('accepts an additional className', () => {
    const { container } = render(
      <Radiobutton className="test-class">Radiobutton Label Text</Radiobutton>
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('optionally renders footer content', () => {
    const { queryByText } = render(
      <Radiobutton footer={<p>Radiobutton Footer Text</p>}>Radiobutton Label Text</Radiobutton>
    );
    expect(queryByText('Radiobutton Footer Text')).toBeInTheDocument();
  });

  it('forwards the input element as ref', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<Radiobutton ref={inputRef}>Radiobutton Label Text</Radiobutton>);
    expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
  });
});
