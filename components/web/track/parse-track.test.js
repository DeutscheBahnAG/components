import parseTrack from './parse-track';

describe('Parse track helper', () => {
  describe('Track number', () => {
    it('should parse one digit', () => {
      expect(parseTrack('2')).toMatchSnapshot();
    });
    it('should parse multiple digits', () => {
      expect(parseTrack('234')).toMatchSnapshot();
    });
  });

  describe('Fragment', () => {
    it('should parse the fragment without space', () => {
      expect(parseTrack('1a')).toMatchSnapshot();
    });
    it('should parse the fragment with space', () => {
      expect(parseTrack('234 b')).toMatchSnapshot();
    });
  });

  describe('Section start', () => {
    it('should parse without spaces and dash', () => {
      expect(parseTrack('1 A-D')).toMatchSnapshot();
    });
    it('should parse with spaces and dash', () => {
      expect(parseTrack('23 B - E')).toMatchSnapshot();
    });
    it('should parse with spaces and ndash', () => {
      expect(parseTrack('456 C - G')).toMatchSnapshot();
    });
    it('should parse with spaces and mdash', () => {
      expect(parseTrack('7a H - I')).toMatchSnapshot();
    });
  });

  describe('Section end', () => {
    it('should parse without spaces and dash', () => {
      expect(parseTrack('1 A-D')).toMatchSnapshot();
    });
    it('should parse with spaces and dash', () => {
      expect(parseTrack('23 B - E')).toMatchSnapshot();
    });
    it('should parse with spaces and ndash', () => {
      expect(parseTrack('456 C - G')).toMatchSnapshot();
    });
    it('should parse with spaces and mdash', () => {
      expect(parseTrack('7a H - I')).toMatchSnapshot();
    });
  });

  describe('Prefix', () => {
    it('should parse the case of Flughafen Frankfurt Fern', () => {
      expect(parseTrack('Fern 1')).toMatchSnapshot();
    });
    it('should parse the case of Flughafen Frankfurt Regio', () => {
      expect(parseTrack('Regio 23a')).toMatchSnapshot();
    });
    it('should parse with dash', () => {
      expect(parseTrack('S-Bahn 101 A-B')).toMatchSnapshot();
    });
  });

  describe('Tracks without any digit', () => {
    it('should parse SEV departures', () => {
      expect(parseTrack('SEV')).toMatchSnapshot();
    });
  });
});
