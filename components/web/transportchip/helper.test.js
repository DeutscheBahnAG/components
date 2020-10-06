import { findStyle, findProduct, Products } from './helper';

describe('Transportchip helper', () => {
  it('should find styles for S-Bahn Berlin in Berlin', () => {
    expect(findStyle({ product: Products.SUBURBAN, zipCode: '10115' })).toEqual('sbahn-berlin');
  });
  it('should find styles for S-Bahn Berlin in Potsdam', () => {
    expect(findStyle({ product: Products.SUBURBAN, zipCode: '14473' })).toEqual('sbahn-berlin');
  });
  it('should not conflict 14* zip codes with S-Bahn Berlin and Mitteldeutschland', () => {
    expect(findStyle({ product: Products.SUBURBAN, zipCode: '14913' })).toEqual(
      'sbahn-mitteldeutschland'
    );
  });
  it('should find the product', () => {
    expect(findProduct('S1')).toEqual(Products.SUBURBAN);
    expect(findProduct('S 1')).toEqual(Products.SUBURBAN);
    expect(findProduct('S 1X')).toEqual(Products.SUBURBAN);
    expect(findProduct('U1')).toEqual(Products.SUBWAY);
  });
});
