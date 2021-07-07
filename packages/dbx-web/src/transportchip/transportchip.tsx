import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import * as Icons from './icons';
import {
  findProduct,
  findStyle,
  styles,
  Products,
  sanitizeLineNumber,
  lineNumberClass,
  specialProducts,
} from './helper';

const iconClassName = clsx('db-transportchip__transport-logo');

const icons = {
  [Products.FERRY]: <Icons.Ferry className={iconClassName} />,
  [Products.SUBWAY]: <Icons.UBahn className={iconClassName} />,
  [Products.SUBURBAN]: <Icons.SBahn className={iconClassName} />,
  [Products.TRAM]: <Icons.Tram className={iconClassName} />,
  [Products.BUS]: <Icons.Bus className={iconClassName} />,
  akn: <Icons.AKN className={iconClassName} />,
};

const transportchipPropTypes = {
  /** The full line number e.g. “S 1”, “STR M10”, “ICE 1234” */
  name: PropTypes.string.isRequired,
  /** Additional class names you want to add to the Transportchip */
  className: PropTypes.string,
  /** The transport type (e.g. Transportchip.Products.SBAHN) */
  product: PropTypes.oneOf(Object.values(Products)),
  /** Use a local style to display line number */
  style: PropTypes.oneOf(Object.keys(styles)),
  /** Optional link target (will create an <a>) */
  href: PropTypes.string,
  /** Optional click handler (will create a <button>) */
  onClick: PropTypes.func,
  /** Optional zip code to detect regional styles */
  zipCode: PropTypes.string,
  /** Show trip as canceled */
  canceled: PropTypes.bool,
  /** Shows (S), [U], (A), (F~), [Tram] or (Bus) logo before the line number */
  showProductLogo: PropTypes.bool,
};

type TransportchipProps = InferProps<typeof transportchipPropTypes>;

type TransportchipComponent = React.FunctionComponent<TransportchipProps> & {
  products: typeof Products;
};

const Transportchip: TransportchipComponent = ({
  name,
  product,
  style,
  className,
  href,
  onClick,
  zipCode,
  canceled,
  showProductLogo,
  ...otherProps
}) => {
  const displayProduct = (product || findProduct(name) || 'unknown').toLowerCase();
  const lineNumber = sanitizeLineNumber(name);
  const detectedStyle =
    style || findStyle({ product: product ?? undefined, zipCode: zipCode ?? '', lineNumber });
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

Transportchip.products = Products;

Transportchip.propTypes = transportchipPropTypes;

Transportchip.defaultProps = {
  product: null,
  className: '',
  style: null,
  href: null,
  onClick: null,
  zipCode: '',
  canceled: false,
  showProductLogo: false,
};

export default Transportchip;
