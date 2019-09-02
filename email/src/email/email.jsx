import React from 'react';
import PropTypes from 'prop-types';
import Inky, { Container, Wrapper } from 'react-inky';

const styles = require('./email.scss').toString();

const Email = ({ preview, children }) => {
  return (
    <Inky>
      <Inky.Head>
        <style type="text/css">{styles}</style>
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
