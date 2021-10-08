import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import parseTrack from './parse-track';

const defaultLabels = { platform: 'Gleis', platformAbbreviation: 'Gl.' };

export const TrackSizes = ['xs', 's', 'm'] as const;
export type TrackSizesType = typeof TrackSizes[number];

const trackPropTypes = {
  track: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(TrackSizes),
  labels: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    platformAbbreviation: PropTypes.string.isRequired,
  }),
};

type TrackProps = InferProps<typeof trackPropTypes>;

type TrackComponent = React.FunctionComponent<TrackProps> & { sizes: typeof TrackSizes };

const Track: TrackComponent = ({ track, size, labels, className, ...props }) => {
  const { fullName, prefix, number, fragment, sectionStart, sectionEnd } = parseTrack(track);
  const { platform, platformAbbreviation } = labels ?? defaultLabels;
  return (
    <span className={clsx('db-track', `db-track--size-${size}`, className)} {...props}>
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

Track.sizes = TrackSizes;

Track.propTypes = trackPropTypes;

Track.defaultProps = {
  className: '',
  size: 'xs',
  labels: defaultLabels,
};

export default Track;
