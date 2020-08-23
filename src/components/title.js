import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title = 'default title' }) => (
  <div className="section-title">
    <h2>{title}</h2>
    <div className="underline" />
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
