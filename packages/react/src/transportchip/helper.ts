/* eslint-disable unicorn/better-regex */

export enum Products {
  ICE = 'ice',
  IC = 'ic',
  EC = 'ec',
  FERRY = 'ferry',
  SUBWAY = 'subway',
  SUBURBAN = 'suburban',
  AIRPLANE = 'airplane',
  INTERCITYBUS = 'intercitybus',
  TRAM = 'tram',
  BUS = 'bus',
  RE = 're',
  RB = 'rb',
  REGIONAL = 'rb',
  TAXI = 'taxi',
  WALKING = 'walking',
  CARSHARING = 'carsharing',
  BIKESHARING = 'bikesharing',
}

export const styles = {
  'sbahn-mitteldeutschland': { products: [Products.SUBURBAN], zipCodes: /^(0[3467]|149)/ },
  'sbahn-berlin': { products: [Products.SUBURBAN], zipCodes: /^1([012356]|4[1345])/ },
  'sbahn-hamburg': { products: [Products.SUBURBAN], zipCodes: /^2[02]|2161/ },
  'sbahn-rheinmain': { products: [Products.SUBURBAN], zipCodes: /^(55|6[01345])/ },
  'sbahn-rheinneckar': { products: [Products.SUBURBAN], zipCodes: /^(6[6789])/ },
  'sbahn-rheinruhrkoeln': { products: [Products.SUBURBAN], zipCodes: /^(4|5[0123789])/ },
  'sbahn-muenchen': { products: [Products.SUBURBAN], zipCodes: /^(8[0125])/ },
  'sbahn-nuernberg': { products: [Products.SUBURBAN], zipCodes: /^(9[012])/ },
  akn: { products: [Products.REGIONAL], zipCodes: /^(2[0245])/ },
  bvg: {
    products: [Products.SUBWAY, Products.TRAM, Products.BUS, Products.FERRY],
    zipCodes: /^1[0-3]|141/,
  },
  hvv: {
    products: [Products.SUBWAY, Products.TRAM, Products.BUS, Products.FERRY, Products.TAXI],
    zipCodes: /^2[02]/,
  },
  mvg: { products: [Products.SUBWAY, Products.TRAM, Products.BUS], zipCodes: /^8[0125]/ },
  vgf: { products: [Products.SUBWAY, Products.TRAM, Products.BUS], zipCodes: /^6[05]/ },
  rnv: { products: [Products.TRAM], zipCodes: /^6[789]/ },
  vgn: { products: [Products.SUBWAY, Products.TRAM, Products.BUS], zipCodes: /^9[012]/ },
  kvb: { products: [Products.TRAM, Products.BUS], zipCodes: /^5[013]/ },
  bsag: { products: [Products.TRAM, Products.BUS], zipCodes: /^28/ },
  nordwestbahn: { products: [Products.SUBURBAN], zipCodes: /^2[78]/ },
};

type RegionalOperators = keyof typeof styles;

const autoProducts = {
  [Products.ICE]: /ICE ?\d+/,
  [Products.IC]: /IC ?\d+/,
  [Products.EC]: /EC ?\d+/,
  [Products.FERRY]: /F ?\d+/,
  [Products.SUBWAY]: /U ?\d+/,
  [Products.SUBURBAN]: /S ?\d+/,
  [Products.TRAM]: /STR ?(M ?)?\d+|Tram \d+/i,
  [Products.BUS]: /Bus \d+/i,
  [Products.RE]: /RE ?\d+/,
  [Products.RB]: /RB ?\d+/,
  [Products.TAXI]: /taxi/i,
};

type AutoProducts = keyof typeof autoProducts;

export const findProduct = (lineNumber: string): AutoProducts | undefined => {
  return (Object.keys(autoProducts) as AutoProducts[]).find((key) =>
    lineNumber.match(autoProducts[key])
  );
};

export const findStyle = ({
  product,
  zipCode,
  lineNumber,
}: {
  product?: Products;
  zipCode: string;
  lineNumber: string;
}): string | undefined => {
  const productKey = product || findProduct(lineNumber);
  return (Object.keys(styles) as RegionalOperators[]).find((key) => {
    const { products: productKeys, zipCodes } = styles[key];
    return productKey && productKeys.includes(productKey) && zipCode.match(zipCodes);
  });
};

export const sanitizeLineNumber = (lineNumber: string): string =>
  lineNumber.replace(/str ?|bus ?|fäh ?|rnv ?|akn ?|stb ?|ast ? |nwb ?/i, '');

export const lineNumberClass = (lineNumber: string): string =>
  lineNumber.toLowerCase().replace(/\s/g, '');

type SpecialProducts = Record<string, (transportType: string, lineNumber: string) => string | null>;

export const specialProducts: SpecialProducts = {
  hvv: (transportType, lineNumber) => {
    if (transportType === Products.BUS) {
      const number = Number.parseInt(lineNumber, 10);
      if (lineNumber.startsWith('X')) {
        return 'expressbus';
      }
      if (number >= 600 && number <= 699) {
        return 'nachtbus';
      }
      if (
        [
          837, 2411, 2415, 2801, 2802, 2803, 2804, 2805, 2807, 2808, 2813, 2825, 2827, 2828, 2830,
          2834, 2835, 2836, 2837, 2838, 8129,
        ].includes(number)
      ) {
        return 'ast';
      }
    }
    return null;
  },
  mvg: (transportType, lineNumber) => {
    if (transportType === Products.TRAM) {
      if (['15', '16', '21', '22', '28', '29'].includes(lineNumber)) {
        return 'tram-temporary';
      }
      if (lineNumber.startsWith('N')) {
        return 'nachttram';
      }
    }
    if (transportType === Products.BUS) {
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
    if (transportType === Products.TRAM) {
      if (['19', '20'].includes(lineNumber)) {
        return 'tram-temporary';
      }
    }
    return null;
  },
};
