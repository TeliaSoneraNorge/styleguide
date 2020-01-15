import React, { useState } from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';
import PropTypes from 'prop-types';

/**
 * Status: *work in progress*
 * Category: Tables
 *
 * This table component use negative margins to achieve full width rows in the table,
 * and padding to add back the negative margin value. To avoid horizontal scrolling
 * it is important to style the nearest full width element with <code>overflow-x: hidden;</code>.
 *
 * It's also recommended to use this component within an element with a styling that centers-, and
 * sets the content to a max-width.
 */
const TableWithDropDown = ({ children, className, ...rest }) => (
  <table
    className={classnames('table-with-drop-down', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </table>
);

const THead = ({ children, className, ...rest }) => (
  <thead
    className={classnames('table-with-drop-down__header', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </thead>
);
TableWithDropDown.THead = THead;

const TBody = ({ children, className, ...rest }) => (
  <tbody
    className={classnames('table-with-drop-down__body', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </tbody>
);
TableWithDropDown.TBody = TBody;

const Tr = ({ children, className, ...rest }) => {
  return (
    <>
      <tr
        className={classnames('table-with-drop-down__row', {
          [className]: className,
        })}
        {...rest}
      >
        {children}
      </tr>
    </>
  );
};
TableWithDropDown.Tr = Tr;

const TrExpandable = ({ children, expandableContent, className, ...rest }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <tr
        className={classnames('table-with-drop-down__expandable-row', {
          [className]: className,
        })}
        onClick={() => setExpanded(!isExpanded)}
        {...rest}
      >
        {children}
        <td
          className={classnames('table-with-drop-down__icon-cell', {
            [className]: className,
          })}
        >
          <SvgIcon
            className={classnames('table-with-drop-down__icon', {
              ['table-with-drop-down__icon--expanded']: isExpanded,
              [className]: className,
            })}
            iconName="ico_dropArrow"
            color="black"
          />
        </td>
      </tr>
      <tr
        hidden={!isExpanded}
        aria-hidden={!isExpanded}
        className={classnames('table-with-drop-down__expandable-row--expanded', {
          [className]: className,
        })}
      >
        <td
          className={classnames('table-with-drop-down__cell--expanded', {
            [className]: className,
          })}
        >
          {expandableContent}
        </td>
      </tr>
    </>
  );
};
TableWithDropDown.TrExpandable = TrExpandable;

TrExpandable.propTypes = {
  expandableContent: PropTypes.any.isRequired,
  className: PropTypes.string,
};

const Td = ({ children, className, ...rest }) => {
  return (
    <td
      className={classnames('table-with-drop-down__cell', {
        [className]: className,
      })}
      {...rest}
    >
      {children}
    </td>
  );
};
TableWithDropDown.Td = Td;

const Th = ({ children, className, ...rest }) => (
  <th
    className={classnames('table-with-drop-down__cell', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </th>
);
TableWithDropDown.Th = Th;

export default TableWithDropDown;
