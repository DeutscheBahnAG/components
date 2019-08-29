import React from 'react';
import PropTypes from 'prop-types';
import Inky, { Container } from 'react-inky';

import './foundation.css';
import './email.css';
import Wrapper from 'react-inky/lib/components/Wrapper';

const Email = ({ preview, children }) => {
  return (
    <Inky>
      <Inky.Head>
        <link rel="stylesheet" href="style.css" />
      </Inky.Head>
      <Inky.Body preview={preview}>
        <Container>
          <Wrapper className="dbx-email">{children}</Wrapper>
        </Container>
      </Inky.Body>
    </Inky>
  );
};

Email.propTypes = {
  preview: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Email;
