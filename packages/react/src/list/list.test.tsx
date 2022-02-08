import * as React from 'react';
import { render } from '@testing-library/react';

import List from './list';

describe('<List />', () => {
  it('should render', () => {
    const { container } = render(
      <List as="ol" className="my-list" verticalPadding={{ mobile: 'm', tablet: 'ml' }} outerLines>
        List test
      </List>
    );
    expect(container).toMatchSnapshot();
  });

  it('should use item renderer', () => {
    const { container } = render(
      <List renderItem={(children, key) => <span key={key}>“{children}”</span>}>
        <b>List content test</b>
      </List>
    );
    expect(container).toMatchSnapshot();
  });
});
