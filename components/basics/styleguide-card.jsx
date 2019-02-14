import React from 'react';
import PropTypes from 'prop-types';

const StyleguideCard = ({ name, value, preview }) => (
  <div className="sg-card">
    <div className="sg-card__preview">{preview}</div>
    <div className="sg-card__content">
      <h4 className="sg-card__name">{name}</h4>
      <p className="sg-card__value">{value}</p>
    </div>
  </div>
);

StyleguideCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  preview: PropTypes.node.isRequired,
};

export default StyleguideCard;
