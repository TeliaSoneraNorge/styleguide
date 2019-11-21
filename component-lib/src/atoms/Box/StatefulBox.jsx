import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * A statefull wrapper around Box for expanded condition.
 *
 * One or more Boxes can be used inside a <a href="/components/molecules#BoxGrid">BoxGrid</a> component.
 */
const StatefulBox = ({
  className,
  isExpanded: isExpandedInitial,
  canExpand,
  color,
  size,
  speechBubbleText,
  children,
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedInitial);
  return (
    <Box
      className={className}
      isExpanded={isExpanded}
      canExpand={canExpand}
      color={color}
      size={size}
      speechBubbleText={speechBubbleText}
      id={id}
      onClick={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    >
      {children}
    </Box>
  );
};

StatefulBox.propTypes = {
  className: PropTypes.string,
  isExpanded: PropTypes.bool,
  canExpand: PropTypes.bool,
  color: PropTypes.oneOf(['purple', 'pink', 'light-orange', 'green', 'blue', 'teal', 'grey', 'black']),
  size: PropTypes.oneOf(['small', 'medium']),
  speechBubbleText: PropTypes.string,
  /** close button aria-controls */
  id: PropTypes.string,
};

export default StatefulBox;
