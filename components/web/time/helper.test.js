import parseTime from './helper';

describe('Time helper', () => {
  it('should parse times', () => {
    const result = new Date(parseTime('12:30'));
    expect(result.getHours()).toEqual(12);
    expect(result.getMinutes()).toEqual(30);
  });
  it('should parse date times', () => {
    const result = new Date(parseTime('1999-12-31T23:59'));
    expect(result.getHours()).toEqual(23);
    expect(result.getMinutes()).toEqual(59);
  });
});
