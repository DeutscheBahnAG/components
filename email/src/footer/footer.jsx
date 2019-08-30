import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'react-inky';

const defaultImprint =
  'Deutsche Bahn AG Potsdamer Platz 2 10785 Berlin AG Berlin-Charlottenburg HRB 50000 Ust Idnr.: DE811569869 Die Deutsche Bahn AG wird vertreten durch den Vorstand: Dr. Richard Lutz, Ronald Pofalla, Berthold Huber, Alexander Doll, Prof. Dr. Sabina Jeschke und Martin Seiler.';

const EmailFooter = ({ children, imprint }) => {
  return (
    <Wrapper className="dbx-email-footer">
      <p className="dbx-email-footer-imprint">{imprint}</p>
      {children}
    </Wrapper>
  );
};

EmailFooter.propTypes = {
  children: PropTypes.node,
  imprint: PropTypes.node,
};

EmailFooter.defaultProps = {
  children: null,
  imprint: defaultImprint,
};

export default EmailFooter;
