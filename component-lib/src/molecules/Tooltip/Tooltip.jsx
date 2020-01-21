import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classnames from 'classnames';

let uniqueId = 0;

/**
 * Status: *finished*
 * Category: FormElements
 **/
const Tooltip = ({ buttonContent, children, className, isExpanded, label, text }) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const [id] = useState(uniqueId++);

  return (
    <div className={classnames('tooltip', { 'tooltip--show': expanded }, className)}>
      <div className="tooltip__button-container">
        {label && <label htmlFor={`tooltip__button-${id}`}>{label}</label>}
        <button
          type="button"
          id={`tooltip__button-${id}`}
          className="tooltip__button"
          aria-controls={`tooltip__box-${id}`}
          aria-expanded={expanded}
          onClick={e => {
            setExpanded(!expanded);
            e.stopPropagation();
          }}
          onMouseOver={() => setExpanded(true)}
          onMouseOut={() => setExpanded(false)}
        >
          {buttonContent || 'i'}
        </button>
      </div>
      <div className="tooltip__box" id={`tooltip__box-${id}`}>
        {children || text}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  buttonContent: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  isExpanded: PropTypes.bool,
  label: PropTypes.string,
  text: PropTypes.string,
};

export default Tooltip;
