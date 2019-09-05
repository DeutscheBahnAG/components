import React from 'react';
import PropTypes from 'prop-types';
import { Button as InkyButton } from 'react-inky';

const EmailButton = ({ children, href, target, centered }) => {
  const Container = centered ? 'center' : React.Fragment;
  return (
    <Container>
      <InkyButton className="dbx-email-button radius" href={href} target={target}>
        {children}
      </InkyButton>
    </Container>
  );
};

EmailButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  centered: PropTypes.bool,
};

EmailButton.defaultProps = {
  target: undefined,
  centered: false,
};

export default EmailButton;
