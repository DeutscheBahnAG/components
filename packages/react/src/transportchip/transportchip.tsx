import React from 'react';
import clsx from 'clsx';
import * as Icons from './icons';
import {
  findProduct,
  findStyle,
  sanitizeLineNumber,
  lineNumberClass,
  specialProducts,
  ProductsEnumType,
  StylesType,
} from './helper';

const iconClassName = clsx('db-transportchip__transport-logo');

type IconsType = Partial<Record<ProductsEnumType | StylesType, JSX.Element>>;
const icons: IconsType = {
  ferry: <Icons.Ferry className={iconClassName} />,
  subway: <Icons.UBahn className={iconClassName} />,
  suburban: <Icons.SBahn className={iconClassName} />,
  tram: <Icons.Tram className={iconClassName} />,
  bus: <Icons.Bus className={iconClassName} />,
  akn: <Icons.AKN className={iconClassName} />,
};

export interface TransportchipProps {
  /** The full line number e.g. “S 1”, “STR M10”, “ICE 1234” */
  name: string;
  /** Additional class names you want to add to the Transportchip */
  className?: string;
  /** The transport type (e.g. Transportchip.Products.SBAHN) */
  product?: ProductsEnumType;
  /** Use a local style to display line number */
  style?: StylesType;
  /** Optional link target (will create an <a>) */
  href?: string;
  /** Optional click handler (will create a <button>) */
  onClick?: () => void;
  /** Optional zip code to detect regional styles */
  zipCode?: string;
  /** Show trip as canceled */
  canceled?: boolean;
  /** Shows (S), [U], (A), (F~), [Tram] or (Bus) logo before the line number */
  showProductLogo?: boolean;
}

const Transportchip: React.FC<TransportchipProps> = ({
  name,
  product: productKey,
  style,
  className,
  href,
  onClick,
  zipCode,
  canceled,
  showProductLogo,
  ...otherProps
}) => {
  const product = productKey || undefined;
  const displayProduct = (product || findProduct(name) || 'unknown').toLowerCase();
  const lineNumber = sanitizeLineNumber(name);
  const detectedStyle = style || findStyle({ product, zipCode: zipCode ?? '', lineNumber });
  const specialProduct =
    product &&
    detectedStyle &&
    specialProducts[detectedStyle] &&
    specialProducts[detectedStyle](product, lineNumber);
  const matches = lineNumber && lineNumber.match(/(.*[A-Z]) ?(\d.*)/);
  // eslint-disable-next-line no-nested-ternary
  const Component = href ? 'a' : onClick ? 'button' : 'span';
  const prefix = matches && matches[1];
  const number = matches && matches[2];
  return (
    <Component
      href={href ?? undefined}
      onClick={onClick ?? undefined}
      className={clsx('db-transportchip', canceled && 'db-transportchip--canceled', className)}
      {...otherProps}
    >
      {showProductLogo &&
        (icons as Record<string, unknown>)[prefix === 'A' ? 'akn' : displayProduct]}
      <span
        className={clsx(
          'db-transportchip__line',
          `db-transportchip--${displayProduct}`,
          specialProduct && `db-transportchip--${specialProduct}`,
          detectedStyle && `db-transportchip--${detectedStyle}`,
          `db-transportchip--${lineNumberClass(name)}`
        )}
      >
        {lineNumber && (
          <span
            className={clsx(
              'db-transportchip__text',
              prefix && prefix.length === 1 && 'db-transportchip__text--short-prefix'
            )}
          >
            {prefix || lineNumber}
          </span>
        )}
        {number && <span className="db-transportchip__text">{number}</span>}
      </span>
    </Component>
  );
};

export default Transportchip;
