import { findStyle, findProduct, products } from './helper';

describe('Transportchip helper', () => {
  it('should find styles for S-Bahn Berlin in Berlin', () => {
    expect(findStyle({ product: products.SUBURBAN, zipCode: '10115' })).toEqual('sbahn-berlin');
  });
  it('should find styles for S-Bahn Berlin in Potsdam', () => {
    expect(findStyle({ product: products.SUBURBAN, zipCode: '14473' })).toEqual('sbahn-berlin');
  });
  it('should not conflict 14* zip codes with S-Bahn Berlin and Mitteldeutschland', () => {
    expect(findStyle({ product: products.SUBURBAN, zipCode: '14913' })).toEqual(
      'sbahn-mitteldeutschland'
    );
  });
  it('should find the product', () => {
    expect(findProduct('S1')).toEqual(products.SUBURBAN);
    expect(findProduct('S 1')).toEqual(products.SUBURBAN);
    expect(findProduct('S 1X')).toEqual(products.SUBURBAN);
    expect(findProduct('U1')).toEqual(products.SUBWAY);
  });
});
