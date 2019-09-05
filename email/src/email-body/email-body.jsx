import React from 'react';
import PropTypes from 'prop-types';
import EmailWrapper from '../email-wrapper/email-wrapper';

const EmailBody = ({ children }) => {
  return <EmailWrapper className="dbx-email-body">{children}</EmailWrapper>;
};

EmailBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmailBody;
