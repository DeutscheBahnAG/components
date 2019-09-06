import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const EmailPincode = ({ children, centered }) => {
  const Container = centered ? 'center' : React.Fragment;
  return (
    <Container>
      <table
        className={clsx('dbx-email-pincode', 'callout', { 'float-center': centered })}
        align={centered ? 'center' : null}
      >
        <tr>
          <th className={clsx('callout-inner', 'dbx-email-pincode-inner')}>{children}</th>
        </tr>
      </table>
    </Container>
  );
};

EmailPincode.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
};

EmailPincode.defaultProps = {
  centered: false,
};

export default EmailPincode;
