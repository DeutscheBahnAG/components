import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Radiobutton from './radiobutton';

describe('<Radiobutton />', () => {
  it('should render', () => {
    render(<Radiobutton />);
    expect(screen.getByText('Radiobutton', { exact: false })).toBeInTheDocument();
  });

  // TODO: add meaningful tests for Radiobutton component
});
