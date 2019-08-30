import React from 'react';
import PropTypes from 'prop-types';
import { Callout as InkyCallout } from 'react-inky';

const EmailPincode = ({ children }) => {
  return <InkyCallout className="dbx-email-pincode">{children}</InkyCallout>;
};

EmailPincode.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmailPincode;
