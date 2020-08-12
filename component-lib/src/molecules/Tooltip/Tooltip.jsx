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
  /** Content of the tooltip button; defaults to "i". */
  buttonContent: PropTypes.node,
  /** The content of the tooltip (if a plain string is not enough). Provide either `text` or `children`. */
  children: PropTypes.node,
  className: PropTypes.string,
  isExpanded: PropTypes.bool,
  /** If provided, add a label to the tooltip button. */
  label: PropTypes.string,
  /** The content of the tooltip as a plain string. Provide either `text` or `children`. */
  text: PropTypes.string,
};

export default Tooltip;
