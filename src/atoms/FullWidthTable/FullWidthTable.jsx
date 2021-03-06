import React from 'react';
import classnames from 'classnames';
import { useThSortable } from './useThSortable';

/**
 * Status: *finished*
 * Category: Tables
 *
 * This table component use negative margins to achieve full width rows in the table,
 * and padding to add back the negative margin value. To avoid horizontal scrolling
 * it is important to style the nearest full width element with <code>overflow-x: hidden;</code>.
 *
 * It's also recommended to use this component within an element with a styling that centers-, and
 * sets the content to a max-width.
 */
const FullWidthTable = ({ children, clickable, className, ...rest }) => (
  <table
    className={classnames('full-width-table', {
      [className]: className,
      [`full-width-table--clickable`]: clickable,
    })}
    {...rest}
  >
    {children}
  </table>
);

const THead = ({ children, className, ...rest }) => (
  <thead
    className={classnames('full-width-table__header', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </thead>
);
FullWidthTable.THead = THead;

const TBody = ({ children, className, ...rest }) => (
  <tbody
    className={classnames('full-width-table__body', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </tbody>
);
FullWidthTable.TBody = TBody;

const TFoot = ({ children, white, className, ...rest }) => (
  <tfoot
    className={classnames('full-width-table__footer', {
      [className]: className,
      'full-width-table__footer--alt': white,
    })}
    {...rest}
  >
    {children}
  </tfoot>
);
FullWidthTable.TFoot = TFoot;

const Tr = ({ children, className, ...rest }) => (
  <tr
    className={classnames('full-width-table__row', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </tr>
);
FullWidthTable.Tr = Tr;

const Td = ({ children, className, ...rest }) => (
  <td
    className={classnames('full-width-table__cell', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </td>
);
FullWidthTable.Td = Td;

const Th = ({ children, className, ...rest }) => (
  <th
    className={classnames('full-width-table__cell', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </th>
);
FullWidthTable.Th = Th;

const ThSortable = ({
  children,
  className,
  onSort,
  isSorted = false,
  isSortedDesc = false,
  sortPriority = null,
  ...rest
}) => (
  <FullWidthTable.Th className={classnames('full-width-table__cell--sortable', className)} {...rest}>
    <button
      type="button"
      onClick={onSort}
      className={classnames(
        'button',
        'button--sortable',
        {
          [`button--sorted-${isSortedDesc ? 'desc' : 'asc'}`]: isSorted,
        },
        {
          [`button--sorted-${sortPriority}`]: isSorted && sortPriority !== null,
        }
      )}
    >
      {children}
    </button>
  </FullWidthTable.Th>
);

FullWidthTable.ThSortable = ThSortable;

FullWidthTable.useThSortable = useThSortable;

export default FullWidthTable;
