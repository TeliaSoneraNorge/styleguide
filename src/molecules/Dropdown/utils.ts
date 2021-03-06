import React from 'react';
import { DropdownItemProps } from './DropdownItem';
/**
 * Check wheter an item is clickable
 *
 * Used to set an index on clickable items only.
 * Non-clicable items should never be highlighted.
 */
const isClickableDropdownItem = (child: React.ReactNode) =>
  React.isValidElement<DropdownItemProps>(child) &&
  child.type.toString().includes('telia-dropdown-item') &&
  !child.props.header &&
  !child.props.divider &&
  child.props.onClick;

/**
 * In order to set programatically set the indices on the dropdown items,
 * we need to recursivly find and clone all items.
 *
 * This enables using custom components to render DropdownItems in a Dropdown.
 * Eg. when you want a scroll continer for a large list of items.
 *
 * Providing flat = true disregards wrappers,
 * and only returns the actula dropdown items
 * ie. retuns a flat list of items
 */

function getItemsRecursive(children: React.ReactNode, index: number, flat?: boolean): React.ReactNode {
  return React.Children.map(children, (child) => {
    /**
     * Clickable dropdown items receive an indexed
     * used to keep track active item
     */
    if (React.isValidElement<DropdownItemProps>(child) && isClickableDropdownItem(child)) {
      index += 1;
      return React.cloneElement(child, {
        index,
      });
    } else if (React.isValidElement<{ children: React.ReactNode }>(child) && child.props.children) {
      /**
       * Disregard the wrapper and return only the children
       */
      if (flat) {
        return getItemsRecursive(child.props.children, index);
      } else {
        /**
         * return the wrapper and children
         */
        return React.cloneElement(child, { ...child.props, children: getItemsRecursive(child.props.children, index) });
      }
    }
    return child;
  });
}

/**
 * Get all dropdown items with appropriate index
 * for navigations with keyboard and highlighting.
 *
 * By defualt returns the children in the structure which they occur.
 * Returns a flat list of only DropdownItems if flat = true
 */
function getIndexedDropdownItems(children: React.ReactNode, flat?: boolean) {
  return React.Children.map(children, (child) => {
    /**
     * If the child is a DropdownMenu we set indecies on all child dropdown items.
     */
    if (
      React.isValidElement<{ children: React.ReactNode }>(child) &&
      child.type.toString().includes('telia-dropdown-content')
    ) {
      return getItemsRecursive(child.props.children, -1, flat);
    } else {
      /**
       * Any other children of the Dropdown will be disregarded in the process of setting indecies.
       * They will be rendered as provided.
       */
      return null;
    }
  });
}

/**
 * The highest highlight index for a collection of children within a dropdown
 */
const getMaxHighlightIndex = (children: React.ReactNode) => {
  /**
   * Retrieve a flat list of all clickable dropdown items
   */
  const flatList = getIndexedDropdownItems(children, true);
  const clickableItems = flatList ? flatList.filter(isClickableDropdownItem) : [];
  return clickableItems.length - 1;
};
export { getIndexedDropdownItems, getMaxHighlightIndex };
