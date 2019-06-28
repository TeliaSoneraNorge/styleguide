import React from 'react';
import PropTypes from 'prop-types';

/**
 * Status: *finished*
 * Category: FormElements
 *
 * This tooltip is implemented with the purpose of having to open/close it by clicking or using keyboard,
 * but the behavior is not implemented as a part of the styleguide.
 **/

const Tooltip = ({ label, text, isExpanded }) => (
  <div className={`tooltip${isExpanded ? ' tooltip--show' : ''}`}>
    <div className="tooltip__button-container">
      {label ? (
        <label>
          {label}
          <button
            id="tooltip-button"
            className="tooltip__button"
            aria-controls="tooltip-box"
            aria-expanded={isExpanded}
          >
            i
          </button>
        </label>
      ) : (
        <button id="tooltip-button" className="tooltip__button" aria-controls="tooltip-box" aria-expanded={isExpanded}>
          i
        </button>
      )}
    </div>
    <div className="tooltip__box" id="tooltip-box">
      {text}
    </div>
  </div>
);
Tooltip.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  isExpanded: PropTypes.bool,
};

export default Tooltip;
