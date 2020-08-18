export const products = {
  ICE: 'ice',
  IC: 'ic',
  EC: 'ec',
  FERRY: 'ferry',
  SUBWAY: 'subway',
  SUBURBAN: 'suburban',
  AIRPLANE: 'airplane',
  INTERCITYBUS: 'intercitybus',
  TRAM: 'tram',
  BUS: 'bus',
  RE: 're',
  RB: 'rb',
  REGIONAL: 'rb',
  TAXI: 'taxi',
  WALKING: 'walking',
  CARSHARING: 'carsharing',
  BIKESHARING: 'bikesharing',
};

export const styles = {
  'sbahn-mitteldeutschland': { products: [products.SUBURBAN], zipCodes: /^(0[3467]|149)/ },
  'sbahn-berlin': { products: [products.SUBURBAN], zipCodes: /^1([012356]|4[1345])/ },
  'sbahn-hamburg': { products: [products.SUBURBAN], zipCodes: /^2[02]|2161/ },
  'sbahn-rheinmain': { products: [products.SUBURBAN], zipCodes: /^(55|6[01345])/ },
  'sbahn-rheinneckar': { products: [products.SUBURBAN], zipCodes: /^(6[6789])/ },
  'sbahn-rheinruhrkoeln': { products: [products.SUBURBAN], zipCodes: /^(4|5[0123789])/ },
  'sbahn-muenchen': { products: [products.SUBURBAN], zipCodes: /^(8[0125])/ },
  'sbahn-nuernberg': { products: [products.SUBURBAN], zipCodes: /^(9[012])/ },
  akn: { products: [products.REGIONAL], zipCodes: /^(2[0245])/ },
  bvg: {
    products: [products.SUBWAY, products.TRAM, products.BUS, products.FERRY],
    zipCodes: /^1[0-3]|141/,
  },
  hvv: {
    products: [products.SUBWAY, products.TRAM, products.BUS, products.FERRY, products.TAXI],
    zipCodes: /^2[02]/,
  },
  mvg: { products: [products.SUBWAY, products.TRAM, products.BUS], zipCodes: /^8[0125]/ },
  vgf: { products: [products.SUBWAY, products.TRAM, products.BUS], zipCodes: /^6[05]/ },
  rnv: { products: [products.TRAM], zipCodes: /^6[789]/ },
  vgn: { products: [products.SUBWAY, products.TRAM, products.BUS], zipCodes: /^9[012]/ },
  kvb: { products: [products.TRAM, products.BUS], zipCodes: /^5[013]/ },
  bsag: { products: [products.TRAM, products.BUS], zipCodes: /^28/ },
  nordwestbahn: { products: [products.SUBURBAN], zipCodes: /^2[78]/ },
};

const autoProducts = {
  [products.ICE]: /ICE ?\d+/,
  [products.IC]: /IC ?\d+/,
  [products.EC]: /EC ?\d+/,
  [products.FERRY]: /F ?\d+/,
  [products.SUBWAY]: /U ?\d+/,
  [products.SUBURBAN]: /S ?\d+/,
  [products.TRAM]: /STR ?(M ?)?\d+|Tram \d+/i,
  [products.BUS]: /Bus \d+/i,
  [products.RE]: /RE ?\d+/,
  [products.RB]: /RB ?\d+/,
  [products.TAXI]: /taxi/i,
};

export const findProduct = (lineNumber) => {
  return Object.keys(autoProducts).find((key) => lineNumber.match(autoProducts[key]));
};

export const findStyle = ({ product, zipCode, lineNumber }) => {
  const productKey = product || findProduct(lineNumber);
  return Object.keys(styles).find((key) => {
    const { products: productKeys, zipCodes } = styles[key];
    return productKeys.includes(productKey) && zipCode.match(zipCodes);
  });
};

export const sanitizeLineNumber = (lineNumber) =>
  lineNumber.replace(/str ?|bus ?|fäh ?|rnv ?|akn ?|stb ?|ast ? |nwb ?/i, '');

export const lineNumberClass = (lineNumber) => lineNumber.toLowerCase().replace(/\s/g, '');

export const specialProducts = {
  hvv: (transportType, lineNumber) => {
    if (transportType === products.BUS) {
      const number = Number.parseInt(lineNumber, 10);
      if (lineNumber.startsWith('X')) {
        return 'expressbus';
      }
      if (lineNumber >= 600 && number <= 699) {
        return 'nachtbus';
      }
      if (
        [
          837,
          2411,
          2415,
          2801,
          2802,
          2803,
          2804,
          2805,
          2807,
          2808,
          2813,
          2825,
          2827,
          2828,
          2830,
          2834,
          2835,
          2836,
          2837,
          2838,
          8129,
        ].includes(number)
      ) {
        return 'ast';
      }
    }
    return null;
  },
  mvg: (transportType, lineNumber) => {
    if (transportType === products.TRAM) {
      if (['15', '16', '21', '22', '28', '29'].includes(lineNumber)) {
        return 'tram-temporary';
      }
      if (lineNumber.startsWith('N')) {
        return 'nachttram';
      }
    }
    if (transportType === products.BUS) {
      if (lineNumber.match(/x\d/i)) {
        return 'expressbus';
      }
      if (lineNumber.match(/n\d/i)) {
        return 'nachtbus';
      }
      if (lineNumber.length === 2) {
        return 'stadtbus';
      }
    }
    return null;
  },
  vgn: (transportType, lineNumber) => {
    if (transportType === products.TRAM) {
      if (['19', '20'].includes(lineNumber)) {
        return 'tram-temporary';
      }
    }
    return null;
  },
};
