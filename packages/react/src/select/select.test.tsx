import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './select';

describe('Select Component', () => {
  it('should render a select', () => {
    const { container } = render(<Select onChange={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a disabled select', () => {
    const { container } = render(<Select disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
    expect(container).toMatchSnapshot();
  });
});
