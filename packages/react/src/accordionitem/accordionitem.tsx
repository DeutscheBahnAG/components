import * as React from 'react';
import clsx from 'clsx';
import Title from '../title';

export interface AccordionitemProps {
  /** Title to show (`<summary>`) */
  title: React.ReactNode;
  /** Content */
  children: React.ReactNode;
  /** Additional class names you want to add to the component */
  className?: string;
}

const Accordionitem: React.FC<AccordionitemProps> = ({
  title,
  children,
  className,
  ...otherProps
}) => (
  <details className={clsx('db-accordionitem', className)} {...otherProps}>
    <summary>
      <svg className="db-accordionitem__arrow" viewBox="0 0 16 16">
        <path
          stroke="currentColor"
          strokeWidth="2"
          d="M6 1.5l6 6-6 6"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Title size="m" light className="db-accordionitem__title">
        {title}
      </Title>
    </summary>
    {children}
  </details>
);

Accordionitem.displayName = 'Accordionitem';

export default Accordionitem;
