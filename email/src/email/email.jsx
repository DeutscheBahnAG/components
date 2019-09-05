import React from 'react';
import PropTypes from 'prop-types';
import Inky, { Container, Wrapper } from 'react-inky';

/* This is required for webpack in Storybook to load the styles.
    It gets replaced with the compiled css in the build process. */
const styles = require('./email.scss').toString();

const Email = ({ preview, children }) => {
  return (
    <Inky>
      <Inky.Head>
        {/* prevent iOS mail client from resizing content: */}
        <meta name="x-apple-disable-message-reformatting" />
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
  /**
   * The preview text to display in mail clients below the subject.
   * This should typically be identical to the first sentence of
   * your email copy.
   */
  preview: PropTypes.string.isRequired,
  /** the content of your email */
  children: PropTypes.node.isRequired,
};

export default Email;
