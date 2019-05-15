import React from 'react';
import classnames from 'classnames';

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
            [`full-width-table--clickable`]: clickable
        })}
        {...rest}>{children}</table>
);
FullWidthTable.THead = ({ children, className, ...rest }) => (
    <thead
        className={classnames('full-width-table__header', {
            [className]: className
        })}
        {...rest}>{children}</thead>
);
FullWidthTable.TBody = ({ children, className, ...rest }) => (
    <tbody
        className={classnames('full-width-table__body', {
            [className]: className
        })}
        {...rest}>{children}</tbody>
);
FullWidthTable.TFoot = ({ children, white, className, ...rest }) => (
    <tfoot
        className={classnames('full-width-table__footer', {
            [className]: className,
            'full-width-table__footer--alt': white
        })}
        {...rest}>{children}</tfoot>
);
FullWidthTable.Tr = ({ children, onClick, className, ...rest }) => (
    <tr
        className={classnames('full-width-table__row', {
            [className]: className
        })}
        onClick={onClick ? onClick : null}
        {...rest}>{children}</tr>
);
FullWidthTable.Td = ({ children, className, ...rest }) => (
    <td
        className={classnames('full-width-table__cell', {
            [className]: className
        })}
        {...rest}>{children}</td>
);
FullWidthTable.Th = ({ children, className, ...rest }) => (
    <th
        className={classnames('full-width-table__cell', {
            [className]: className
        })}
        {...rest}>{children}</th>
);

export default FullWidthTable;