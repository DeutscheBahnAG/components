---
to: "<%= files.includes('tests') ? `packages/react/src/${name}/${name}.test.tsx` : null %>"
---
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import <%= Name %> from './<%= name %>';

describe('<<%= Name %> />', () => {
  it('should render', () => {
    render(<<%= Name %> />);
    expect(screen.getByText('<%= Name %>', { exact: false })).toBeInTheDocument();
  });

  // TODO: add meaningful tests for <%= Name %> component
});
