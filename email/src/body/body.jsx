import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Center } from 'react-inky';

const EmailBody = ({ children }) => {
  return (
    <Wrapper className="dbx-email-body">
      <Center>{children}</Center>
    </Wrapper>
  );
};

EmailBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmailBody;
