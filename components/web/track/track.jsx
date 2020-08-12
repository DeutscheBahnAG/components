import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import parseTrack from './parse-track';

const Track = ({
  track,
  size,
  labels: { platform, platformAbbreviation },
  className,
  ...props
}) => {
  const { fullName, prefix, number, fragment, sectionStart, sectionEnd } = parseTrack(track);
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

Track.sizes = {
  XS: 'xs',
  S: 's',
  M: 'm',
};

Track.propTypes = {
  track: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(Track.sizes).map(k => Track.sizes[k])),
  labels: PropTypes.shape({
    platform: PropTypes.string.isRequired,
    platformAbbreviation: PropTypes.string.isRequired,
  }),
};

Track.defaultProps = {
  className: '',
  size: Track.sizes.XS,
  labels: { platform: 'Gleis', platformAbbreviation: 'Gl.' },
};

export default Track;
