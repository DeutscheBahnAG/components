/* eslint-disable unicorn/better-regex */

export const ProductsEnum = [
  'ice',
  'ic',
  'ec',
  'ferry',
  'subway',
  'suburban',
  'airplane',
  'intercitybus',
  'tram',
  'bus',
  're',
  'rb',
  'taxi',
  'walking',
  'carsharing',
  'bikesharing',
] as const;
export type ProductsEnumType = typeof ProductsEnum[number];

export const Styles = [
  'sbahn-mitteldeutschland',
  'sbahn-berlin',
  'sbahn-hamburg',
  'sbahn-rheinmain',
  'sbahn-rheinneckar',
  'sbahn-rheinruhrkoeln',
  'sbahn-muenchen',
  'sbahn-nuernberg',
  'akn',
  'bvg',
  'hvv',
  'mvg',
  'vgf',
  'rnv',
  'vgn',
  'kvb',
  'bsag',
  'nordwestbahn',
] as const;
export type StylesType = typeof Styles[number];

type StylesObject = Record<
  StylesType,
  {
    products: ProductsEnumType[];
    zipCodes: RegExp;
  }
>;

export const styles: StylesObject = {
  'sbahn-mitteldeutschland': { products: ['suburban'], zipCodes: /^(0[3467]|149)/ },
  'sbahn-berlin': { products: ['suburban'], zipCodes: /^1([012356]|4[1345])/ },
  'sbahn-hamburg': { products: ['suburban'], zipCodes: /^2[02]|2161/ },
  'sbahn-rheinmain': { products: ['suburban'], zipCodes: /^(55|6[01345])/ },
  'sbahn-rheinneckar': { products: ['suburban'], zipCodes: /^(6[6789])/ },
  'sbahn-rheinruhrkoeln': { products: ['suburban'], zipCodes: /^(4|5[0123789])/ },
  'sbahn-muenchen': { products: ['suburban'], zipCodes: /^(8[0125])/ },
  'sbahn-nuernberg': { products: ['suburban'], zipCodes: /^(9[012])/ },
  akn: { products: ['rb'], zipCodes: /^(2[0245])/ },
  bvg: { products: ['subway', 'tram', 'bus', 'ferry'], zipCodes: /^1[0-3]|141/ },
  hvv: { products: ['subway', 'tram', 'bus', 'ferry', 'taxi'], zipCodes: /^2[02]/ },
  mvg: { products: ['subway', 'tram', 'bus'], zipCodes: /^8[0125]/ },
  vgf: { products: ['subway', 'tram', 'bus'], zipCodes: /^6[05]/ },
  rnv: { products: ['tram'], zipCodes: /^6[789]/ },
  vgn: { products: ['subway', 'tram', 'bus'], zipCodes: /^9[012]/ },
  kvb: { products: ['tram', 'bus'], zipCodes: /^5[013]/ },
  bsag: { products: ['tram', 'bus'], zipCodes: /^28/ },
  nordwestbahn: { products: ['suburban'], zipCodes: /^2[78]/ },
};

type AutoProductsType = Partial<Record<ProductsEnumType, RegExp>>;
const autoProducts: AutoProductsType = {
  ice: /ICE ?\d+/,
  ic: /IC ?\d+/,
  ec: /EC ?\d+/,
  ferry: /F ?\d+/,
  subway: /U ?\d+/,
  suburban: /S ?\d+/,
  tram: /STR ?(M ?)?\d+|Tram \d+/i,
  bus: /Bus \d+/i,
  re: /RE ?\d+/,
  rb: /RB ?\d+/,
  taxi: /taxi/i,
};

type AutoProducts = keyof typeof autoProducts;

export const findProduct = (lineNumber: string): AutoProducts | undefined => {
  return ProductsEnum.find((key) => {
    const autoProduct = autoProducts[key];
    if (!autoProduct) return false;
    return lineNumber.match(autoProduct);
  });
};

export const findStyle = ({
  product,
  zipCode,
  lineNumber,
}: {
  product?: ProductsEnumType;
  zipCode: string;
  lineNumber: string;
}): string | undefined => {
  const productKey = product || findProduct(lineNumber);
  return Styles.find((key) => {
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
    if (transportType === 'bus') {
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
    if (transportType === 'tram') {
      if (['15', '16', '21', '22', '28', '29'].includes(lineNumber)) {
        return 'tram-temporary';
      }
      if (lineNumber.startsWith('N')) {
        return 'nachttram';
      }
    }
    if (transportType === 'bus') {
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
    if (transportType === 'tram') {
      if (['19', '20'].includes(lineNumber)) {
        return 'tram-temporary';
      }
    }
    return null;
  },
};
