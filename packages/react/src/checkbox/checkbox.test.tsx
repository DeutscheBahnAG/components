import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './checkbox';

describe('Checkbox component', () => {
  it('should render a Checkbox', () => {
    render(<Checkbox>My label</Checkbox>);
    expect(screen.getByLabelText('My label')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
