import React, { useState } from 'react';
import classnames from 'classnames';

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

const TFoot = ({ children, white, className, ...rest }) => (
  <tfoot
    className={classnames('table-with-drop-down__footer', {
      [className]: className,
      'table-with-drop-down__footer--alt': white,
    })}
    {...rest}
  >
    {children}
  </tfoot>
);
TableWithDropDown.TFoot = TFoot;

const useExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    return setIsExpanded(!isExpanded);
  };
  return [isExpanded, toggleExpand];
};

const Tr = ({ children, className, ...rest }) => {
  const [isExpanded, toggleExpand] = useExpand();
  return (
    <>
      <tr
        className={classnames('table-with-drop-down__row', {
          [className]: className,
        })}
        onClick={() => toggleExpand()}
        {...rest}
      >
        {children}
      </tr>
      {isExpanded && (
        <tr
          className={classnames('table-with-drop-down__expanded', {
            [className]: className,
          })}
        >
          Hei
        </tr>
      )}
    </>
  );
};
TableWithDropDown.Tr = Tr;

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
