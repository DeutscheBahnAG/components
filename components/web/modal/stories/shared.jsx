import React from 'react';
import PropTypes from 'prop-types';
import { actions } from '@storybook/addon-actions';

// eslint-disable-next-line import/prefer-default-export
export const modalActions = actions({
  onClose: 'onClose: Modal close triggered',
});

export const primaryActions = actions({
  onClick: 'onClick: Primary action event triggered',
});

export const secondaryActions = actions({
  onClick: 'onClick: Secondary action event triggered',
});

export const DOMEnvironment = ({ children }) => {
  return (
    <>
      <div id="modal-portal" />
      <div id="app-root">{children}</div>
    </>
  );
};

DOMEnvironment.propTypes = {
  children: PropTypes.node.isRequired,
};

export const exampleText = {
  short: 'Modals are used to focus the users’ attention to a certain information or decision.',
  intro: `
    The Modal component darkens the screen a bit and opens a dialogue to focus the users’ attention
    to a certain information or decision. Use Modals with care and as infrequent as possible. In
    many cases there are better ways to fulfil the users’ needs and apps’ requirements.
  `,
  abstract: `
    The Modal component darkens the screen a bit and opens a dialogue to focus the users’ attention
    to a certain information or decision. Use Modals with care and as infrequent as possible. In
    many cases there are better ways to fulfil the users’ needs and apps’ requirements. In some
    cases you might better use the Notification component as an alternative to an informative Modal.
  `,
  much: `
    The Modal component darkens the screen a bit and opens a dialogue to focus the users’ attention
    to a certain information or decision. Use Modals with care and as infrequent as possible. In
    many cases there are better ways to fulfil the users’ needs and apps’ requirements. In some
    cases you might better use the Notification component as an alternative to an informative Modal.

    Transactional Modal dialogues with a reasonable title and understandable interaction elements
    usually help users to quickly choose the right options. Rather than giving the users the feeling
    that they get forced to interact, they should feel a helping hand by using the Modal dialogue.
  `,
};

const ExampleChildren = ({ className, title, textType, paragraphsCount }) => {
  const paragraphsArr = Array.from({ length: paragraphsCount });
  return (
    <>
      {title && <strong>{title}</strong>}
      {paragraphsArr.map((v, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={`${i}: ${v}`} className={className}>
          {exampleText[textType]}
        </p>
      ))}
    </>
  );
};

ExampleChildren.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  textType: PropTypes.string,
  paragraphsCount: PropTypes.number,
};

ExampleChildren.defaultProps = {
  className: 'paragraph',
  title: null,
  textType: 'intro',
  paragraphsCount: 1,
};

export { ExampleChildren };
