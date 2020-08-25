import React from 'react';

type Props = {
    isGrey?: boolean;
};

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * These are 3 cards blocks. Can have 2 or 3 card blocks in width, with white or gray background
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const Cards = ({ children, isGrey }: Props) => (
  <div className="cards">{React.Children.map(children, child => React.cloneElement(child, { isGrey }))}</div>
);

export default Cards;
