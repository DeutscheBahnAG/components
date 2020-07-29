import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Icons from './icons';
import {
  findProduct,
  findStyle,
  styles,
  products,
  sanitizeLineNumber,
  lineNumberClass,
  specialProducts,
} from './helper';

const iconClassName = clsx('dbx-transportchip__transport-logo');

const icons = {
  [products.FERRY]: <Icons.Ferry className={iconClassName} />,
  [products.SUBWAY]: <Icons.UBahn className={iconClassName} />,
  [products.SUBURBAN]: <Icons.SBahn className={iconClassName} />,
  [products.TRAM]: <Icons.Tram className={iconClassName} />,
  [products.BUS]: <Icons.Bus className={iconClassName} />,
  akn: <Icons.AKN className={iconClassName} />,
};

const Transportchip = ({
  name,
  product,
  style,
  className,
  href,
  onClick,
  zipCode,
  canceled,
  ...otherProps
}) => {
  const displayProduct = (product || findProduct(name) || 'unknown').toLowerCase();
  const lineNumber = sanitizeLineNumber(name);
  const detectedStyle = style || findStyle({ product, zipCode, lineNumber });
  const specialProduct =
    specialProducts[detectedStyle] && specialProducts[detectedStyle](product, lineNumber);
  const matches = lineNumber && lineNumber.match(/(.*[A-Z]) ?(\d.*)/);
  // eslint-disable-next-line no-nested-ternary
  const Component = href ? 'a' : onClick ? 'button' : 'span';
  const prefix = matches && matches[1];
  const number = matches && matches[2];
  return (
    <Component
      href={href}
      onClick={onClick}
      className={clsx('dbx-transportchip', canceled && 'dbx-transportchip--canceled', className)}
      {...otherProps}
    >
      {icons[matches && matches[1] === 'A' ? 'akn' : displayProduct]}
      <span
        className={clsx(
          'dbx-transportchip__line',
          `dbx-transportchip--${displayProduct}`,
          specialProduct && `dbx-transportchip--${specialProduct}`,
          detectedStyle && `dbx-transportchip--${detectedStyle}`,
          `dbx-transportchip--${lineNumberClass(name)}`
        )}
      >
        {lineNumber && (
          <span
            className={clsx(
              'dbx-transportchip__text',
              prefix && prefix.length === 1 && 'dbx-transportchip__text--short-prefix'
            )}
          >
            {prefix || lineNumber}
          </span>
        )}
        {number && <span className="dbx-transportchip__text">{number}</span>}
      </span>
    </Component>
  );
};

Transportchip.products = products;

Transportchip.propTypes = {
  /** The full line number e.g. “S 1”, “STR M10”, “ICE 1234” */
  name: PropTypes.string.isRequired,
  /** Additional class names you want to add to the Transportchip */
  className: PropTypes.string,
  /** The transport type (e.g. Transportchip.products.SBAHN) */
  product: PropTypes.oneOf(Object.keys(Transportchip.products).map(k => Transportchip.products[k])),
  /** Use a local style to display line number */
  style: PropTypes.oneOf(Object.keys(styles).map(k => styles[k])),
  /** Optional link target (will create an <a>) */
  href: PropTypes.string,
  /** Optional click handler (will create a <button>) */
  onClick: PropTypes.func,
  /** Optional zip code to detect regional styles */
  zipCode: PropTypes.string,
  /** Show trip as canceled */
  canceled: PropTypes.bool,
};

Transportchip.defaultProps = {
  product: null,
  className: '',
  style: null,
  href: null,
  onClick: null,
  zipCode: '',
  canceled: false,
};

export default Transportchip;
