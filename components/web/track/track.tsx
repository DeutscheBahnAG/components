import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import parseTrack from './parse-track';

const defaultLabels = { platform: 'Gleis', platformAbbreviation: 'Gl.' };

export enum TrackSizes {
  XS = 'xs',
  S = 's',
  M = 'm',
}

const trackPropTypes = {
  track: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(TrackSizes)),
  labels: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    platformAbbreviation: PropTypes.string.isRequired,
  }),
};

type TrackProps = InferProps<typeof trackPropTypes>;

type TrackComponent = React.FC<TrackProps> & { sizes: typeof TrackSizes };

const Track: TrackComponent = ({ track, size, labels, className, ...props }) => {
  const { fullName, prefix, number, fragment, sectionStart, sectionEnd } = parseTrack(track);
  const { platform, platformAbbreviation } = labels ?? defaultLabels;
  return (
    <span className={clsx('dbx-track', `dbx-track--${size}`, className)} {...props}>
      {number ? (
        <>
          {prefix || <abbr title={platform}>{platformAbbreviation}</abbr>} {number}
          {fragment && <span className="dbx-track__fragment">{fragment}</span>}
          {sectionStart && (
            <>
              {' '}
              <span className="dbx-track__section">
                {sectionStart}
                <span className="dbx-track__separator">–</span>
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
  size: Track.sizes.XS,
  labels: defaultLabels,
};

export default Track;
