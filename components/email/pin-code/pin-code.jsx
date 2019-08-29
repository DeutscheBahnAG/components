import React from 'react';
import PropTypes from 'prop-types';
import { Callout as InkyCallout } from 'react-inky';

import './pin-code.css';

const EmailPinCode = ({ children }) => {
  return <InkyCallout className="dbx-email-pin-code">{children}</InkyCallout>;
};

EmailPinCode.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmailPinCode;
