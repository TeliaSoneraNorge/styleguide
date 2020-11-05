import React from 'react';
import cs from 'classnames';
import _ from 'lodash';

import { Icon } from '../../atoms/Icon';
import { Checkbox } from '../Checkbox';

type TableBodyCellProps = {
  rightAligned?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLTableDataCellElement>) => void;
};

export const TableBodyCell: React.FC<TableBodyCellProps> = props => {
  const { children } = props;

  return (
    <td
      onClick={
        props.onClick
          ? e => {
              e.stopPropagation();
              props.onClick && props.onClick();
            }
          : undefined
      }
      role={props.onClick ? 'button' : undefined}
      onKeyDown={
        props.onClick
          ? e => {
              if (e.keyCode === 32 || e.keyCode === 13) {
                e.stopPropagation();
                e.preventDefault();
                props.onClick && props.onClick();
              }
            }
          : undefined
      }
      tabIndex={props.onClick ? 0 : undefined}
      className={cs({
        'data-table__cell': true,
        'data-table__cell--right-aligned': props.rightAligned,
      })}
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
  | {});

export const TableBodyRow: React.FC<TableBodyRowProps> = props => {
  const { uniqueId } = React.useContext(UniqueIdContext);

  return (
    <tr
      className={cs('data-table__row', { 'data-table__row--connected': props.connectedToPrevious }, props.className)}
      onClick={e => {
        e && e.stopPropagation();
        props.onClickRow && props.onClickRow(e);
      }}
      role={props.onClickRow ? 'button' : undefined}
      onKeyDown={e => {
        if (e.keyCode === 32 || e.keyCode === 13) {
          e.stopPropagation();
          e.preventDefault();
          props.onClickRow && props.onClickRow();
        }
      }}
      tabIndex={props.onClickRow ? 0 : undefined}
    >
      {'onSelect' in props && (
        <TableBodyCell>
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
} & (
  | {
      sortDirection: 'ASC' | 'DESC' | 'NONE';
      onClick: (e?: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
    }
  | {});

export const TableHeadCell: React.FC<TableHeadCellProps> = props => {
  const { children } = props;

  return (
    <th
      className={cs({
        'data-table__cell': true,
        'data-table__cell--header': true,
        'data-table__cell--sortable': 'onClick' in props,
        'data-table__cell--right-aligned': props.rightAligned,
      })}
      onClick={
        'onClick' in props
          ? e => {
              e.stopPropagation();
              props.onClick && props.onClick(e);
            }
          : undefined
      }
      onKeyDown={
        'onClick' in props
          ? e => {
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
};

type TableProps = {
  paging?: React.ReactNode;
  fullWidth?: boolean;
} & ({ headerCells: React.ReactNode } | { headings: Array<TableHeading> }) &
  (
    | {
        selected: Array<String | number>;
        allSelected: boolean;
        onSelectAll: (e?: React.ChangeEvent<HTMLInputElement>) => void;
        checkAllLabel?: string;
        uncheckAllLabel?: string;
      }
    | {}) &
  (
    | {
        onClickColumnHeader: (columnId: string | number, e?: React.MouseEvent<HTMLTableHeaderCellElement>) => void;
        sortedColumnId: string | number;
        sortedColumnDirection: 'ASC' | 'DESC' | 'NONE';
      }
    | {});

const UniqueIdContext = React.createContext<{ uniqueId: string }>({ uniqueId: 'styleguide-table' });

export const Table: React.FC<TableProps> = props => {
  const uniqueId = `table-${Math.round(Math.random() * 10000)}`;
  return (
    <UniqueIdContext.Provider value={{ uniqueId }}>
      <span className={cs('data-table', { 'data-table--fullWidth': props.fullWidth })}>
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
                      controls={props.selected && props.selected.map(id => `${uniqueId}-${id}`).join(' ')}
                      onChange={props.onSelectAll}
                    />
                  </TableHeadCell>
                )}
                {_.map(props.headings, ({ id, label, rightAligned }) =>
                  'onClickColumnHeader' in props ? (
                    <TableHeadCell
                      key={id}
                      rightAligned={rightAligned}
                      sortDirection={props.sortedColumnId === id ? props.sortedColumnDirection : 'NONE'}
                      onClick={e => props.onClickColumnHeader(id, e)}
                    >
                      {label}
                    </TableHeadCell>
                  ) : (
                    <TableHeadCell key={id} rightAligned={rightAligned}>
                      {label}
                    </TableHeadCell>
                  )
                )}
              </tr>
            ) : (
              props.headerCells
            )}
          </thead>
          <tbody>{props.children}</tbody>
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

  onPerPageChange: (perPage: number, e?: React.ChangeEvent<HTMLSelectElement>) => void;
  onPageChange: (forward: boolean, e?: React.MouseEvent<HTMLButtonElement>) => void;

  fromToLabel?: string;
  perPageLabel?: string;
  selectOptions?: Array<number>;
};

export const TablePagingControls: React.FC<TablePagingControlsProps> = props => {
  return (
    <form onSubmit={e => e.preventDefault()} className="table-paging">
      {props.numberOfSelectedRows ? (
        <span className="table-paging__text">
          {`${props.numberOfSelectedRows} ${props.selectedRowsLabel ||
            `${props.numberOfSelectedRows > 1 ? 'rader' : 'rad'} er valgt`}`}
        </span>
      ) : null}
      <label className="table-paging__text">
        {props.perPageLabel || 'Rader per side: '}
        <select
          value={props.perPage}
          onChange={e => props.onPerPageChange(parseInt(e.target.value), e)}
          className="table-paging__per-page"
        >
          {(props.selectOptions || [10, 25, 50, 100, 1000]).map((option: number, key: number) => (
            <option value={option} key={key}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <span className="table-paging__text">
        {props.fromToLabel || `${props.from}-${props.to} av ${props.dataLength}`}
      </span>
      <button
        disabled={props.from === 1}
        aria-label="Forrige side"
        className="table-paging__button"
        onClick={e => {
          e.preventDefault();
          props.onPageChange(false, e);
        }}
      >
        <Icon icon="arrow-left" className="data-table__icon" />
      </button>
      <button
        disabled={props.to <= props.dataLength}
        aria-label="Neste side"
        className="table-paging__button"
        onClick={e => {
          e.preventDefault();
          props.onPageChange(true, e);
        }}
      >
        <Icon icon="arrow-right" className="data-table__icon" />
      </button>
    </form>
  );
};
