import * as React from 'react';
import clsx from 'clsx';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

export const logoSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
export type LogoSizesType = typeof logoSizes[number];

export const logoVariants = ['auto', 'default', 'filled', 'white'] as const;
export type LogoVariantsType = typeof logoVariants[number];

export const logoBrands = ['DB', 'DB Netze', 'DB Schenker', 'DB Cargo'] as const;
export type LogoBrandsType = typeof logoBrands[number];

export const logoDirections = ['horizontal', 'vertical', 'full-width'] as const;
export type LogoDirectionsType = typeof logoDirections[number];

export interface LogoProps {
  className?: string;
  brand?: LogoBrandsType;
  align?: string;
  size?: ResponsiveType<LogoSizesType>;
  variant?: LogoVariantsType;
  children?: React.ReactNode;
  additionalMarking?: string;
  direction?: LogoDirectionsType;
  href?: string;
  mt?: string;
  mb?: string;
}

type LogoWrapperRef = HTMLAnchorElement & HTMLSpanElement;

type LogoComponent = React.ForwardRefExoticComponent<
  LogoProps & React.RefAttributes<LogoWrapperRef>
>;

const Logo: LogoComponent = React.forwardRef(
  (
    {
      className = '',
      brand = 'db',
      align = 'left',
      size = 'm',
      variant = 'auto',
      children = undefined,
      additionalMarking = undefined,
      direction = 'horizontal',
      href,
      mb = undefined,
      mt = undefined,
      ...otherProps
    },
    ref
  ) => {
    const Wrapper = href ? 'a' : 'span';
    const prepareadditionalMarking = (m) =>
      ['xs', 's', 'm', 'l'].includes(size as string) ? m.replace('\n', ' ') : m;
    const [additionalMarkingFirstLine, additionalMarkingSecondLine] = prepareadditionalMarking(
      additionalMarking || ''
    ).split('\n');
    const cssProperties = {};
    if (mb) cssProperties['--db-logo--mb'] = mb;
    if (mt) cssProperties['--db-logo--mt'] = mt;
    return (
      <Wrapper
        ref={ref}
        href={href ?? undefined}
        className={clsx(
          'db-logo',
          responsiveClassNames(size, 'db-logo--size-'),
          `db-logo--${variant}`,
          brand === 'cargo' && `db-logo--align-${align}`,
          direction !== 'horizontal' && `db-logo--${direction}`,
          className
        )}
        style={cssProperties}
        {...otherProps}
      >
        {/* Do not copy this SVG code. This is optimized for this component only. */}
        <svg viewBox="0 0 40 28" className="db-logo__db">
          <rect x="2" y="2" width="36" height="24" />
          {variant === 'white' ? (
            <path d="M27.2 7.53h-1.43v4.54h1.83c1.53.03 2.47-1.04 2.47-2.27 0-1.63-.96-2.32-2.87-2.27zm.6 7.8h-2.04v4.84h1.84c.7.01 3.07 0 3.07-2.37 0-1.01-.62-2.5-2.87-2.47zm-17.1-7.7h-.83v12.54h1.53c2.58.06 3.77-2.05 3.77-5.97 0-3.6-.41-6.74-4.47-6.57zm18.4-2.76c5.13.02 5.23 4.03 5.23 4.43a4.33 4.33 0 01-3.15 4.13v.14c3.26.79 3.75 3.14 3.75 4.43 0 4.76-4.68 5.02-6.71 5.03h-6.68V4.87h7.56zm-16.9 0c4.7.02 7.23 3.01 7.23 9.03 0 5.29-1.68 9.1-7.23 9.13H5.54V4.87h6.66zm23.7-1.94H4c-.63 0-1.04.5-1.06 1.05l-.01.12v19.7c0 .57.35 1.22.95 1.26l.12.01h31.9c.63 0 1.13-.6 1.16-1.14l.01-.13V4.1a1.2 1.2 0 00-1.17-1.17zm0-2.86c2.1 0 3.97 1.56 4.03 3.63v20.2a4 4 0 01-3.83 4.03H4A3.91 3.91 0 01.07 24.1V3.9A3.8 3.8 0 013.8.07h32.1z" />
          ) : (
            <path d="M35.9 0c2.13 0 3.98 1.6 4.1 3.7v20.2a4.12 4.12 0 01-3.9 4.1H4c-2.13 0-3.9-1.7-4-3.9V3.9C0 1.77 1.69.1 3.8 0h32.1zm0 3H4c-.56 0-.95.44-1 .98V23.8c0 .56.35 1.12.88 1.2H35.9c.56 0 1.03-.52 1.1-1.08V4.1c0-.6-.5-1.1-1.1-1.1zM12.2 4.8c4.7 0 7.3 3 7.3 9.1 0 5.3-1.7 9.2-7.3 9.2H5.5V4.8h6.7zm16.9 0c5.2 0 5.3 4.1 5.3 4.5 0 2.4-1.9 3.9-3.2 4.2 3.3.8 3.8 3.2 3.8 4.5 0 4.83-4.75 5.09-6.78 5.1H21.5V4.8zM10.7 7.7h-.8v12.4h1.5c2.4 0 3.7-1.8 3.7-5.9 0-3.6-.4-6.5-4.4-6.5zm17.1 7.7h-2v4.7h1.8c.7 0 3 0 3-2.3 0-1-.6-2.4-2.8-2.4zm-.6-7.8h-1.4V12h1.8c1.5 0 2.4-1 2.4-2.2 0-1.5-.8-2.2-2.8-2.2z" />
          )}
        </svg>
        {brand === 'netze' && (
          <svg viewBox="0 0 77 28" className="db-logo__netze">
            <path d="M49.524 7.624v3.144h-3.596v12.396H41.92V10.768h-3.736l.284-3.144h11.056zm-36.16 0l2.758 3.629.363.478.365.48 2.97 3.909V7.624h3.4v15.54h-2.668l-3.184-4.183-.382-.502-3.586-4.711v9.396H10V7.624zm23.232 0v3.148h-6.292v2.984h5.34v3.004h-5.34v3.256h7.36l-.276 3.148H26.296V7.624h10.3zm39.532 0v3.148h-6.76v2.984h5.34v3.004h-5.34v3.256h7.36l-.276 3.148H65.36V7.624h10.768zM62.584 7.62v2.708l-.027.036-.077.103-.292.39-.323.431-6.42 8.573-.117.155H60.784l.247-.001h1.279l.169-.001.508-.001h.08l.105-.001-.232 3.148H50.32v-2.64l.309-.413.188-.252 1.965-2.626.375-.5c.252-.339.51-.684.77-1.03l.387-.518c1.61-2.154 3.133-4.19 3.298-4.413H51.12l.256-3.148h11.208z" />
          </svg>
        )}
        {brand === 'schenker' && (
          <svg viewBox="0 0 128 28" className="db-logo__schenker">
            <path d="M15.645 7.268c1.334 0 2.497.216 3.886.72l.107.04v3.249l-.226-.097c-1.446-.635-2.356-.847-3.6-.847-1.407 0-2.118.434-2.118 1.285 0 .483.176.771.706 1.143.382.27.446.295 2.061.987l.066.028.121.051a7.6 7.6 0 01.063.027c2.892 1.2 3.87 2.405 3.87 4.775 0 3.128-2.163 4.85-6.088 4.85-1.697 0-2.996-.275-4.484-.954l-.094-.045v-3.251l.235.115c1.6.79 2.673 1.07 4.092 1.07 1.643 0 2.478-.503 2.478-1.492 0-.848-.264-1.139-3.062-2.3C11.026 15.553 10 14.256 10 11.993c0-3.003 2.056-4.725 5.644-4.725zm14.49 0c1.39 0 2.598.2 3.803.637l.105.04v3.217l-.22-.088c-1.285-.503-2.358-.72-3.584-.72-2.646 0-3.627 1.38-3.627 5.094 0 3.56 1.011 4.945 3.605 4.945 1.248 0 2.213-.193 3.693-.743l.217-.08v3.016l-.093.041c-1.182.558-2.574.853-4.026.853-2.594 0-4.656-.815-5.965-2.36-1.124-1.34-1.648-3.138-1.648-5.65 0-2.963.769-5.01 2.42-6.444 1.32-1.151 3.159-1.758 5.32-1.758zm10.672.357v6.028h5.537V7.625h4.01v15.542h-4.01V16.76h-5.537v6.407h-4.009V7.625h4.009zm23.699 0v3.149h-6.761v2.983h5.339v3.003h-5.34v3.255h7.363l-.28 3.152h-11.09V7.625h10.769zm6.537 0l2.938 3.866.547.72 2.97 3.908V7.625h3.401v15.542H78.23l-3.183-4.184-.383-.502-3.583-4.71v9.396h-3.4V7.625zm17.248 0v6.635l5.09-6.599.028-.036h4.165s-5.715 7.129-5.868 7.322l6.383 8.22h-4.762l-2.324-3.033-.49-.64-2.222-2.9v6.573h-4.007V7.625h4.007zm22.401 0v3.149h-6.761v2.983h5.339v3.003h-5.34v3.255h7.367l-.282 3.152h-11.09V7.625h10.767zm9.137 0c3.926 0 5.836 1.504 5.836 4.6 0 2.042-.914 3.202-2.953 3.868.502.306.96.754 1.4 1.471l3.372 5.603h-4.374l-2.79-4.705c-.705-1.188-1.031-1.427-1.934-1.427h-.51v6.132h-4.01V7.625zm-.126 3h-1.827v3.677h1.827c1.502 0 2.06-.507 2.06-1.868 0-1.368-.5-1.809-2.06-1.809z" />
          </svg>
        )}
        {brand === 'cargo' && (
          <svg viewBox="0 0 54 25" className="db-logo__cargo">
            <path d="M35.676 10.458c1.304 0 2.282.442 3.337 1.498l.46-1.268h2.263v9.836c0 2.978-1.822 4.476-5.484 4.476a12.941 12.941 0 01-3.874-.615v-2.459a10.69 10.69 0 003.643.711c1.88 0 2.627-.615 2.627-2.19V19.41a4.71 4.71 0 01-3.279 1.306c-2.435 0-3.72-1.729-3.72-5.033 0-3.304 1.477-5.225 4.027-5.225zm-18.254-.096c3.163 0 4.467 1.171 4.467 3.995v4.227c0 1.075.115 1.517.48 1.786v.538h-2.992l-.46-1.44c-.824 1.19-1.821 1.748-3.145 1.748-1.879 0-2.972-1.096-2.972-2.997 0-1.595.71-2.498 2.301-2.882.959-.25 1.573-.307 3.701-.403v-.557c0-1.172-.46-1.614-1.668-1.614-.997 0-1.764.134-3.528.653v-2.382a11.51 11.51 0 013.816-.672zm31.16 0c3.316 0 5.138 1.92 5.138 5.436 0 3.497-1.822 5.418-5.139 5.418-3.355 0-5.139-1.921-5.139-5.495 0-3.438 1.841-5.36 5.14-5.36zM7.661 6.616a9.763 9.763 0 013.432.576v2.632a8.695 8.695 0 00-3.337-.673c-2.512 0-3.47 1.345-3.47 4.822 0 3.343.997 4.687 3.451 4.687a9.025 9.025 0 003.432-.691v2.459a8.497 8.497 0 01-3.624.768c-2.32 0-4.18-.73-5.35-2.113C1.2 17.893.72 16.26.72 13.993c0-2.67.69-4.515 2.167-5.802C4.076 7.154 5.705 6.616 7.66 6.616zM27.45 10.38v1.94c.978-1.172 2.032-1.786 3.279-1.882v2.823a12.776 12.776 0 00-3.28.577v7.07h-3.086v-9.894c1.227-.039 1.994-.25 2.377-.634h.71zm-8.648 5.993a9.736 9.736 0 00-2.07.212c-.672.192-.921.538-.921 1.345 0 .845.345 1.21 1.15 1.21a2.607 2.607 0 001.841-.826v-1.94zm29.78-3.86a1.644 1.644 0 00-1.63.979 5.987 5.987 0 00-.288 2.248c0 1.383.115 2.074.402 2.535.313.532.901.838 1.515.788a1.644 1.644 0 001.63-.98c.192-.442.288-1.133.288-2.305 0-1.326-.115-2.017-.403-2.478a1.606 1.606 0 00-1.515-.788zm-11.832.345c-1.342 0-1.898.865-1.898 2.958 0 2.056.498 2.824 1.84 2.824.652 0 1.132-.172 1.956-.71v-4.515a3.368 3.368 0 00-1.898-.557z" />
          </svg>
        )}
        {children || logoBrands[brand || 'db']}
        {additionalMarkingSecondLine && (
          <span className="db-logo__additional-marking db-logo__additional-marking--two-line">
            {additionalMarkingFirstLine}
            <br />
            {additionalMarkingSecondLine}
          </span>
        )}
        {additionalMarkingFirstLine && !additionalMarkingSecondLine && (
          <span className="db-logo__additional-marking">{additionalMarkingFirstLine}</span>
        )}
      </Wrapper>
    );
  }
);

Logo.displayName = 'Logo';
export default Logo;
