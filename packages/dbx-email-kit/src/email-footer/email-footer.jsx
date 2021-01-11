import React from 'react';
import PropTypes from 'prop-types';

import EmailSeparator from '../email-separator/email-separator';
import EmailWrapper from '../email-wrapper/email-wrapper';

const defaultImprint =
  'Deutsche Bahn AG, Potsdamer Platz 2, 10785 Berlin, AG Berlin-Charlottenburg HRB 50000, USt-IdNr.: DE811569869. Die Deutsche Bahn AG wird vertreten durch den Vorstand: Dr. Richard Lutz, Ronald Pofalla, Dr. Levin Holle, Berthold Huber, Dr. Sigrid Nikutta, Prof. Dr. Sabina Jeschke und Martin Seiler.';

const EmailFooter = ({ children, imprint }) => {
  return (
    <>
      <EmailWrapper className="dbx-email-footer">
        <EmailSeparator />
        <p className="dbx-email-footer-imprint">{imprint}</p>
        {children}
      </EmailWrapper>
    </>
  );
};

EmailFooter.propTypes = {
  /** Custom content to add below the imprint such as unsubscribe links */
  children: PropTypes.node,
  /** Custom imprint copy. Leave the default in case you want to send from an official DB product.  */
  imprint: PropTypes.node,
};

EmailFooter.defaultProps = {
  children: null,
  imprint: defaultImprint,
};

export default EmailFooter;
