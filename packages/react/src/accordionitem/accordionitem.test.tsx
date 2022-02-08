import * as React from 'react';
import { render } from '@testing-library/react';

import Accordionitem from './accordionitem';

describe('<Accordionitem />', () => {
  it('should render', () => {
    const { container } = render(
      <Accordionitem title="Accordionitem title test" className="my-accordionitem">
        Accordionitem content test
      </Accordionitem>
    );
    expect(container).toMatchSnapshot();
  });
});
