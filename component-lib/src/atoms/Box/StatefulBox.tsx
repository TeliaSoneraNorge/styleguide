import React, { useState } from 'react';
import Box from './Box';

type Props = {
    className?: string;
    isExpanded?: boolean;
    canExpand?: boolean;
    color?: 'purple' | 'pink' | 'light-orange' | 'green' | 'blue' | 'teal' | 'grey' | 'black';
    size?: 'small' | 'medium';
    speechBubbleText?: string;
    id?: string;
};

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * A statefull wrapper around Box for expanded condition.
 *
 * One or more Boxes can be used inside a <a href="/components/molecules#BoxGrid">BoxGrid</a> component.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const StatefulBox = ({ className, isExpanded: isExpandedInitial, canExpand, color, size, speechBubbleText, children, id, }: Props) => {
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

export default StatefulBox;
