import * as React from 'react';
import { render } from '@testing-library/react';

import Accordion from './accordion';
import Accordionitem from '../accordionitem';

describe('<Accordion />', () => {
  it('should render', () => {
    const { container } = render(
      <Accordion className="my-accordion" outerLines>
        <Accordionitem title="Accordionitem title test">Accordionitem content test</Accordionitem>
      </Accordion>
    );
    expect(container).toMatchSnapshot();
  });
});
