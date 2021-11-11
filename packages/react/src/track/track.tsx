import React from 'react';
import clsx from 'clsx';
import parseTrack from './parse-track';
import { responsiveClassNames } from '../helper/responsive-class-names';
import { ResponsiveType } from '../shared';

const defaultLabels = { platform: 'Gleis', platformAbbreviation: 'Gl.' };

export const trackSizes = ['xs', 's', 'm'] as const;
export type TrackSizesType = typeof trackSizes[number];

export interface TrackProps {
  track: string;
  className?: string;
  size?: ResponsiveType<TrackSizesType>;
  labels?: {
    platform: string;
    platformAbbreviation: string;
  };
}

const Track: React.FC<TrackProps> = ({
  track,
  size = 'xs',
  labels = defaultLabels,
  className,
  ...props
}) => {
  const { fullName, prefix, number, fragment, sectionStart, sectionEnd } = parseTrack(track);
  const { platform, platformAbbreviation } = labels ?? defaultLabels;
  return (
    <span
      className={clsx('db-track', responsiveClassNames(size, 'db-track--size-'), className)}
      {...props}
    >
      {number ? (
        <>
          {prefix || <abbr title={platform}>{platformAbbreviation}</abbr>} {number}
          {fragment && <span className="db-track__fragment">{fragment}</span>}
          {sectionStart && (
            <>
              {' '}
              <span className="db-track__section">
                {sectionStart}
                <span className="db-track__separator">–</span>
                {sectionEnd}
              </span>
            </>
          )}
        </>
      ) : (
        <>{fullName}</>
      )}
    </span>
  );
};

export default Track;
