import React from 'react';
import cs from 'classnames';
import _ from 'lodash';

import { Icon } from '../../atoms/Icon';
import { Checkbox } from '../../atoms/Checkbox';
import { emptyTableSvg } from './emptyTableSvg';

type TableBodyCellProps = {
  rightAligned?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLTableDataCellElement>) => void;
  isCheckbox?: boolean;
  className?: string;
  children?: React.ReactNode;
};

// const emptyStateImage = (
//   <svg width="316" height="217" viewBox="0 0 316 217" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       opacity="0.3"
//       d="M11.1395 78.3385C11.1395 78.3385 -44.3303 203.64 101.718 205.396C247.766 207.152 314.533 187.908 315.193 124.196C315.853 60.4846 263.255 0.914295 171.57 0.305295C79.8854 -0.303705 30.3027 23.5691 11.1395 78.3385Z"
//       fill="#8888B4"
//       fillOpacity="0.16"
//     />
//     <path
//       d="M38.5498 34.2541L43.229 13L47.2889 29.1081C47.689 30.6616 48.5038 32.0773 49.6462 33.2036C50.7886 34.3299 52.2157 35.1246 53.7748 35.5025L65.7112 38.3953L54.6477 41.6331C52.8916 42.1585 51.2964 43.1185 50.0101 44.4244C48.7237 45.7303 47.7878 47.3397 47.2889 49.1035L43.1071 63.6688L39.3923 48.1089C39.0636 46.7386 38.3611 45.4865 37.3629 44.4919C36.3647 43.4974 35.1101 42.7993 33.7387 42.4756L23 39.9584L38.5498 34.2541Z"
//       fill="#30004B"
//     />
//     <path
//       d="M262.978 41.8164L267.771 20L272.014 36.5333C272.43 38.133 273.275 39.5891 274.458 40.7446C275.641 41.9 277.117 42.7111 278.728 43.0903L291 46.067L279.614 49.3925C277.799 49.9218 276.148 50.9016 274.814 52.2404C273.48 53.5792 272.508 55.2335 271.987 57.049L267.691 72L263.851 56.0299C263.517 54.62 262.796 53.331 261.769 52.3077C260.742 51.2844 259.45 50.5674 258.037 50.2372L247 47.6493L262.978 41.8164Z"
//       fill="#30004B"
//     />
//     <path
//       d="M136.361 89.3265L138.867 78L141.086 86.586C141.298 87.4162 141.735 88.1733 142.349 88.7752C142.964 89.3772 143.733 89.8013 144.573 90.0015L151 91.5405L144.995 93.2685C144.044 93.5437 143.18 94.0534 142.482 94.7499C141.784 95.4464 141.276 96.3069 141.005 97.251L138.799 105L136.824 96.7245C136.649 95.991 136.27 95.3206 135.731 94.7887C135.192 94.2568 134.514 93.8846 133.774 93.714L128 92.364L136.361 89.3265Z"
//       fill="#29003E"
//     />
//     <path
//       d="M221.179 155.843L224.229 142L226.931 152.494C227.189 153.509 227.721 154.434 228.469 155.17C229.217 155.905 230.153 156.424 231.175 156.668L239 158.549L231.689 160.661C230.532 160.998 229.48 161.621 228.63 162.472C227.781 163.323 227.162 164.375 226.832 165.529L224.146 175L221.742 164.885C221.529 163.989 221.068 163.17 220.412 162.52C219.756 161.869 218.931 161.415 218.029 161.206L211 159.556L221.179 155.843Z"
//       fill="#29003E"
//     />
//     <path
//       d="M90.5411 188.716L94.8987 169L98.759 183.946C99.1275 185.391 99.8871 186.709 100.956 187.757C102.024 188.805 103.361 189.543 104.822 189.891L116 192.57L105.556 195.578C103.903 196.058 102.399 196.945 101.186 198.157C99.9723 199.37 99.0885 200.868 98.6169 202.511L94.7803 216L91.3463 201.594C91.0412 200.318 90.3831 199.151 89.4458 198.225C88.5086 197.299 87.3296 196.651 86.0414 196.354L76 194.004L90.5411 188.716Z"
//       fill="#30004B"
//     />
//   </svg>
// );

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
  children?: React.ReactNode;
} & (
  | {
      onSelect: (e?: React.ChangeEvent<HTMLInputElement>) => void;
      selected: boolean;
      selectId: string;
      checkboxLabel: string;
    }
  | {}
);

export const TableBodyRow = React.forwardRef<HTMLTableRowElement, TableBodyRowProps>((props, ref) => {
  const { uniqueId } = React.useContext(UniqueIdContext);

  return (
    <tr
      className={cs(
        'data-table__row',
        {
          'data-table__row--connected': props.connectedToPrevious,
          'data-table__row--clickable': props.onClickRow,
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
      ref={ref}
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
});

TableBodyRow.displayName = 'TableBodyRow';

type TableHeadCellProps = {
  rightAligned?: boolean;
  className?: string;
  /**
   * set fixed columns width
   */
  width?: number;
  children?: React.ReactNode;
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
  children?: React.ReactNode;
  style?: React.CSSProperties;
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
  ) &
  (
    | {
        tableIsEmpty: boolean;
        emptyTableLabel: string;
      }
    | {}
  );

const UniqueIdContext = React.createContext<{ uniqueId: string }>({ uniqueId: 'styleguide-table' });

export const Table: React.FC<TableProps> = (props) => {
  const uniqueId = `table-${Math.round(Math.random() * 10000)}`;
  return (
    <>
      {'tableIsEmpty' in props && props.tableIsEmpty && !props.loading ? (
        <div className="data-table__empty-state">
          {emptyTableSvg}
          <div>{props.emptyTableLabel}</div>
        </div>
      ) : (
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
            style={props.style}
          >
            <table className="data-table__table">
              <thead>
                {'headings' in props ? (
                  <tr className="data-table__row data-table__row__header">
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
      )}
    </>
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
