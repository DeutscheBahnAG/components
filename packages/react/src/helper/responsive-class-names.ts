import clsx from 'clsx';
import { ResponsiveType } from '../shared';

export function responsiveClassNames(
  steps: ResponsiveType<string | number>,
  className: string
): string {
  if (steps instanceof Object) {
    let classNames = `${className}${steps.mobile}`;
    if (steps.tablet) classNames += ` t:${className}${steps.tablet}`;
    if (steps.desktop) classNames += ` d:${className}${steps.desktop}`;
    return classNames;
  }
  return `${className}${steps}`;
}

export function responsiveToggleClassNames(
  steps: ResponsiveType<boolean>,
  className: string,
  includeReset?: boolean
): string | undefined {
  if (steps instanceof Object) {
    return clsx({
      [className]: steps.mobile,
      [`t:${className}`]: steps.tablet,
      [`d:${className}`]: steps.desktop,
      [`t:${className}!`]: includeReset && steps.mobile === false,
      [`t:${className}!`]: includeReset && steps.tablet === false,
      [`d:${className}!`]: includeReset && steps.desktop === false,
    });
  }
  return steps ? className : undefined;
}
