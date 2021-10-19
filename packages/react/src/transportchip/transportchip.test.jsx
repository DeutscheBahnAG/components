import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Transportchip from './transportchip';

describe('Transportchip Component', () => {
  it('should split S 1', () => {
    const { container } = render(<Transportchip name="S 1" />);
    expect(container).toMatchSnapshot();
  });

  it('should split S1', () => {
    const { container } = render(<Transportchip name="S1" />);
    expect(container).toMatchSnapshot();
  });

  it('should not split Bus 1', () => {
    const { container } = render(<Transportchip name="Bus 1" />);
    expect(container).toMatchSnapshot();
  });

  it('should detect the train type S-Bahn from S 1', () => {
    const { container } = render(<Transportchip name="S 1" />);
    expect(container).toMatchSnapshot();
  });

  it('should detect the train type S-Bahn from S1', () => {
    const { container } = render(<Transportchip name="S1" />);
    expect(container).toMatchSnapshot();
  });

  it('should use the zip code', () => {
    const { container } = render(<Transportchip name="S1" zipCode="10115" />);
    expect(container).toMatchSnapshot();
  });

  it('should allow setting the transport type manually', () => {
    const { container } = render(<Transportchip product="bus" name="U 1" />);
    expect(container).toMatchSnapshot();
  });

  it('should have normal spacing for products with three characters', () => {
    const { container } = render(<Transportchip name="ICE 1" />);
    expect(container).toMatchSnapshot();
  });

  it('should have normal spacing for products with two character', () => {
    const { container } = render(<Transportchip name="IC 1" />);
    expect(container).toMatchSnapshot();
  });

  it('should have normal spacing for products with one character', () => {
    const { container } = render(<Transportchip name="S 1" />);
    expect(container).toMatchSnapshot();
  });
});
