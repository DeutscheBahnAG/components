import React from 'react';
import PropTypes from 'prop-types';
import { Button as InkyButton } from 'react-inky';

const EmailButton = ({ children, href, target }) => {
  return (
    <InkyButton className="dbx-email-button radius" href={href} target={target}>
      {children}
    </InkyButton>
  );
};

EmailButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

EmailButton.defaultProps = {
  target: undefined,
};

export default EmailButton;
