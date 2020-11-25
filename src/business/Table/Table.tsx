import React from 'react';
import cs from 'classnames';
import _ from 'lodash';

import { Icon } from '../../atoms/Icon';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../../molecules/Dropdown';

type TableBodyCellProps = {
  rightAligned?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLTableDataCellElement>) => void;
  isCheckbox?: boolean;
  className?: string;
};

export const TableBodyCell: React.FC<TableBodyCellProps> = (props) => {
  const { children } = props;

  return (
    <td
      onClick={(e) => {
        if (props.isCheckbox || props.onClick) {
          e.stopPropagation();
        }
        props.onClick && props.onClick();
      }}
      role={props.onClick ? 'button' : undefined}
      onKeyDown={
        props.onClick
          ? (e) => {
              if (e.keyCode === 32 || e.keyCode === 13) {
                e.stopPropagation();
                e.preventDefault();
                props.onClick && props.onClick();
              }
            }
          : undefined
      }
      tabIndex={props.onClick ? 0 : undefined}
      className={cs(
        {
          'data-table__cell': true,
          'data-table__cell--right-aligned': props.rightAligned,
        },
        props.className
      )}
    >
      {children}
    </td>
  );
};

type TableBodyRowProps = {
  onClickRow?: (e?: React.MouseEvent<HTMLTableRowElement>) => void;
  className?: string;
  connectedToPrevious?: boolean;
} & (
  | {
      onSelect: (e?: React.ChangeEvent<HTMLInputElement>) => void;
      selected: boolean;
      selectId: string;
      checkboxLabel: string;
    }
  | {}
);

export const TableBodyRow: React.FC<TableBodyRowProps> = (props) => {
  const { uniqueId } = React.useContext(UniqueIdContext);

  return (
    <tr
      className={cs(
        'data-table__row',
        {
          'data-table__row--connected': props.connectedToPrevious,
          'data-table__row--selected': 'selected' in props && props.selected,
        },
        props.className
      )}
      onClick={(e) => {
        e && e.stopPropagation();
        props.onClickRow && props.onClickRow(e);
      }}
      role={props.onClickRow ? 'button' : undefined}
      onKeyDown={(e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
          e.stopPropagation();
          e.preventDefault();
          props.onClickRow && props.onClickRow();
        }
      }}
      tabIndex={props.onClickRow ? 0 : undefined}
    >
      {'onSelect' in props && (
        <TableBodyCell isCheckbox={true}>
          <Checkbox
            className="data-table__checkbox"
            label={props.checkboxLabel || 'Velg rad'}
            hiddenLabel={true}
            onChange={props.onSelect}
            checked={props.selected ? true : false}
            id={`${uniqueId}-${props.selectId}`}
          />
        </TableBodyCell>
      )}
      {props.children}
    </tr>
  );
};

type TableHeadCellProps = {
  rightAligned?: boolean;
  className?: string;
  /**
   * set fixed columns width
   */
  width?: number;
} & (
  | {
      sortDirection: 'ASC' | 'DESC' | 'NONE';
      onClick: (e?: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
    }
  | {}
);

export const TableHeadCell: React.FC<TableHeadCellProps> = (props) => {
  const { children } = props;

  return (
    <th
      className={cs(
        {
          'data-table__cell': true,
          'data-table__cell--header': true,
          'data-table__cell--sortable': 'onClick' in props,
          'data-table__cell--right-aligned': props.rightAligned,
        },
        props.className
      )}
      onClick={
        'onClick' in props
          ? (e) => {
              e.stopPropagation();
              props.onClick && props.onClick(e);
            }
          : undefined
      }
      onKeyDown={
        'onClick' in props
          ? (e) => {
              if (e.keyCode === 32 || e.keyCode === 13) {
                e.stopPropagation();
                e.preventDefault();
                props.onClick();
              }
            }
          : undefined
      }
      role={'onClick' in props ? 'button' : undefined}
      tabIndex={'onClick' in props ? 0 : undefined}
      style={props.width ? { width: props.width } : undefined}
    >
      {children}
      {'onClick' in props && props.sortDirection && props.sortDirection !== 'NONE' && ' '}
      {'onClick' in props && props.sortDirection === 'ASC' && (
        <Icon icon="arrow-small-up" className="data-table__icon" />
      )}
      {'onClick' in props && props.sortDirection === 'DESC' && (
        <Icon icon="arrow-small-down" className="data-table__icon" />
      )}
    </th>
  );
};

type TableHeading = {
  label: string;
  id: string;
  rightAligned?: boolean;
  /**
   * set fixed columns width
   */
  width?: number;
};

type TableProps = {
  paging?: React.ReactNode;
  fullWidth?: boolean;
  compact?: boolean;
  className?: string;
  /**
   * Sets borders on table.
   */
  bordered?: boolean;
  /**
   * used to render skeleton.
   * @default rows is 20
   *
   * Spescify columns when rendering headings using `headerCells`
   * @default columns is 5
   */
  dimension?: { rows?: number; columns?: number };

  /**
   * used to render skeleton
   */
  loading?: boolean;
} & ({ headerCells: React.ReactNode } | { headings: Array<TableHeading> }) &
  (
    | {
        selected: Array<String | number>;
        allSelected: boolean;
        onSelectAll: (e?: React.ChangeEvent<HTMLInputElement>) => void;
        checkAllLabel?: string;
        uncheckAllLabel?: string;
      }
    | {}
  ) &
  (
    | {
        onClickColumnHeader: (columnId: string | number, e?: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
        sortedColumnId: string | number;
        sortedColumnDirection: 'ASC' | 'DESC' | 'NONE';
      }
    | {}
  );

const UniqueIdContext = React.createContext<{ uniqueId: string }>({ uniqueId: 'styleguide-table' });

export const Table: React.FC<TableProps> = (props) => {
  const uniqueId = `table-${Math.round(Math.random() * 10000)}`;
  return (
    <UniqueIdContext.Provider value={{ uniqueId }}>
      <span
        className={cs(
          'data-table',
          {
            'data-table--fullWidth': props.fullWidth,
            'data-table--bordered': props.bordered,
            'data-table--compact': props.compact,
          },
          props.className
        )}
      >
        <table className="data-table__table">
          <thead>
            {'headings' in props ? (
              <tr className="data-table__row data-table__row--header">
                {'selected' in props && (
                  <TableHeadCell>
                    <Checkbox
                      className="data-table__checkbox"
                      label={
                        props.allSelected
                          ? props.uncheckAllLabel || 'Fjern alle rader'
                          : props.checkAllLabel || 'Velg alle rader'
                      }
                      hiddenLabel={true}
                      checked={props.allSelected ? true : false}
                      partial={props.selected && props.selected.length > 0 && !props.allSelected}
                      controls={props.selected && props.selected.map((id) => `${uniqueId}-${id}`).join(' ')}
                      onChange={props.onSelectAll}
                    />
                  </TableHeadCell>
                )}
                {_.map(props.headings, (heading) =>
                  'onClickColumnHeader' in props ? (
                    <TableHeadCell
                      key={heading.id}
                      rightAligned={heading.rightAligned}
                      width={heading.width}
                      sortDirection={props.sortedColumnId === heading.id ? props.sortedColumnDirection : 'NONE'}
                      onClick={(e) => props.onClickColumnHeader(heading.id, e)}
                    >
                      {heading.label}
                    </TableHeadCell>
                  ) : (
                    <TableHeadCell {...heading}>{heading.label}</TableHeadCell>
                  )
                )}
              </tr>
            ) : (
              props.headerCells
            )}
          </thead>
          {props.loading ? (
            <tbody>
              <TableSkeletonLoading
                rowsCount={props.dimension?.rows ?? 20}
                columnCount={'headings' in props ? props.headings.length : props.dimension?.columns ?? 5}
              />
            </tbody>
          ) : (
            <tbody>{props.children}</tbody>
          )}
        </table>
        {props.paging && <div className="data-table__paging">{props.paging}</div>}
      </span>
    </UniqueIdContext.Provider>
  );
};

type TablePagingControlsProps = {
  from: number;
  to: number;
  perPage: number;
  dataLength: number;
  numberOfSelectedRows?: number;
  selectedRowsLabel?: string;

  onPerPageChange: (perPage: number, e?: React.MouseEvent) => void;
  onPageChange: (forward: boolean, e?: React.MouseEvent) => void;

  fromToLabel?: string;
  perPageLabel?: string;
  selectOptions?: Array<number>;
};

export const TablePagingControls: React.FC<TablePagingControlsProps> = (props) => {
  return (
    <div className="table-paging">
      {props.numberOfSelectedRows ? (
        <span className="table-paging__text">
          {`${props.numberOfSelectedRows} ${
            props.selectedRowsLabel || `${props.numberOfSelectedRows > 1 ? 'rader' : 'rad'} er valgt`
          }`}
        </span>
      ) : null}
      <div>
        <Dropdown fullWidth={true}>
          <DropdownToggle
            outline={false}
            color="white"
            label={(props.perPageLabel || 'Rader per side: ') + props.perPage}
          />
          <DropdownMenu>
            {(props.selectOptions || [10, 25, 50, 100, 1000]).map((option: number, key: number) => (
              <DropdownItem onClick={() => props.onPerPageChange(option)}>{option}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <span className="table-paging__text">
        {props.fromToLabel || `${props.from}-${props.to} av ${props.dataLength}`}
      </span>
      <div className="table-paging__navigation">
        <Button
          size="compact"
          kind="secondary-text"
          icon="arrow-left"
          aria-label="Forrige side"
          onClick={(e) => props.onPageChange(false, e)}
          disabled={props.from <= 1}
        />

        <Button
          size="compact"
          kind="secondary-text"
          icon="arrow-right"
          aria-label="Neste side"
          onClick={(e) => props.onPageChange(true, e)}
          disabled={props.to >= props.dataLength}
        />
      </div>
    </div>
  );
};

const TableSkeletonLoading: React.FC<{ rowsCount: number; columnCount: number }> = (props) => (
  <>
    {_.times(props.rowsCount, (idx) => (
      <tr className="data-table__skeleton data-table__row" key={idx}>
        {_.times(props.columnCount, (i) => (
          <td className="data-table__cell" key={`${i}-${idx}`}>
            <div>&nbsp;</div>
          </td>
        ))}
      </tr>
    ))}
  </>
);
