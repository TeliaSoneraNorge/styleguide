import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';

/**
 * Status: *finished*
 * Category: Table with expandable rows
 */

interface Props {
  className?: string;
  children: ReactNode;
  rest?: any;
}

interface TableWithDropDownElements {
  THead: typeof THead;
  TBody: typeof TBody;
  Tr: typeof Tr;
  Td: typeof Td;
  Th: typeof Th;
  TrExpandable: typeof TrExpandable;
}

const TableWithDropDown: React.FC<
  Props & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>
> &
  TableWithDropDownElements = ({ children, className, ...rest }) => (
  <table className={classnames('table-with-drop-down', className)} {...rest}>
    {children}
  </table>
);

export const THead: React.FC<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
> = ({ children, className, ...rest }) => (
  <thead className={classnames('table-with-drop-down__header', className)} {...rest}>
    {children}
  </thead>
);

TableWithDropDown.THead = THead;

export const TBody: React.FC<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
> = ({ children, className, ...rest }) => (
  <tbody className={classnames('table-with-drop-down__body', className)} {...rest}>
    {children}
  </tbody>
);
TableWithDropDown.TBody = TBody;

export const Tr: React.FC<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
> = ({ children, className, ...rest }) => {
  return (
    <tr className={classnames('table-with-drop-down__row', className)} {...rest}>
      {children}
    </tr>
  );
};

TableWithDropDown.Tr = Tr;

interface PropsExpandableContent {
  expandableContent?: ReactNode;
}

export const TrExpandable: React.FC<
  Props &
    PropsExpandableContent &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
> = ({ children, expandableContent, className, ...rest }) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13 && expandableContent) {
      e.preventDefault();
      setExpanded(!isExpanded);
    }
  };
  return (
    <>
      <tr
        tabIndex={0}
        className={classnames(
          expandableContent ? 'table-with-drop-down__expandable-row' : 'table-with-drop-down__row',
          className
        )}
        onClick={() => expandableContent && setExpanded(!isExpanded)}
        onKeyUp={handleKeyUp}
        {...rest}
      >
        {children}
        <td className={classnames('table-with-drop-down__icon-cell', className)}>
          {expandableContent && (
            <SvgIcon
              className={classnames('table-with-drop-down__icon', className, {
                ['table-with-drop-down__icon--expanded']: isExpanded,
              })}
              iconName="ico_dropArrow"
              color="black"
            />
          )}
        </td>
      </tr>
      <tr
        tabIndex={0}
        style={{ display: isExpanded ? 'flex' : 'none' }}
        aria-hidden={!isExpanded}
        className={classnames('table-with-drop-down__expandable-row--expanded', className)}
      >
        <td  className={classnames('table-with-drop-down__cell--expanded', className)}>{expandableContent}</td>
      </tr>
    </>
  );
};

TableWithDropDown.TrExpandable = TrExpandable;

export const Td: React.FC<
  Props & React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>
> = ({ children, className, ...rest }) => {
  return (
    <td className={classnames('table-with-drop-down__cell', className)} {...rest}>
      {children}
    </td>
  );
};
TableWithDropDown.Td = Td;

export const Th: React.FC<
  Props & React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>
> = ({ children, className, ...rest }) => (
  <th className={classnames('table-with-drop-down__cell', className)} {...rest}>
    {children}
  </th>
);
TableWithDropDown.Th = Th;

export default TableWithDropDown;
