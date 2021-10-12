import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ActionAdd } from '@db-design/react-icons';
import Link from './link';

describe('Link Component', () => {
  it('should render a link', () => {
    const { container } = render(<Link href="/">My link 1</Link>);
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('My link 1');
    expect(container).toMatchSnapshot();
  });

  it('should render a submit link', () => {
    const { container } = render(<Link type={Link.types.SUBMIT}>My link 2</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render a secondary link', () => {
    const { container } = render(<Link variant={Link.variants.SECONDARY}>My link 3</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render a mixed link', () => {
    const { container } = render(<Link variant={Link.variants.MIXED}>My link 4</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render a link with additional attributes', () => {
    const { container } = render(<Link title="Click me">My link 5</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render a link with additional classes', () => {
    const { container } = render(<Link className="my-class">My link 6</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render a link when `href` is not set', () => {
    const { container } = render(<Link>My link 7</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render an internal link anchor when `href` is set', () => {
    const { container } = render(<Link href="/">My link 8</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render an download link anchor when `href` is set', () => {
    const { container } = render(
      <Link href="/" download>
        My link 9
      </Link>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render an external link anchor when `href` starts with http', () => {
    const { container } = render(<Link href="http://www.bahn.de/">My link 10</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render an external link anchor when `href` starts with https', () => {
    const { container } = render(<Link href="https://www.bahn.de/">My link 11</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render a the icon on the left side', () => {
    const { container } = render(
      <Link href="/" iconPosition={Link.iconPositions.BEFORE}>
        My link 12
      </Link>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a the icon on the right side', () => {
    const { container } = render(
      <Link href="/" iconPosition={Link.iconPositions.AFTER} download>
        My link 13
      </Link>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a custom icon', () => {
    const { container } = render(
      <Link href="/" icon={<ActionAdd />}>
        My link 14
      </Link>
    );
    expect(container).toMatchSnapshot();
  });

  it('should allow custom class names', () => {
    const { container } = render(<Link className="my-custom-class">My link 15</Link>);
    expect(container).toMatchSnapshot();
  });

  it('should render a link if both href and onClick are defined', () => {
    const { container } = render(
      <Link href="/" onClick={() => {}}>
        My link 16
      </Link>
    );
    expect(container).toMatchSnapshot();
  });
});
