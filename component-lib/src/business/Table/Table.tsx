import React from 'react';
import cs from 'classnames';
import _ from 'lodash';

import { Icon } from '../../atoms/Icon';
import { Checkbox } from '../Checkbox';

export type SortDirection = "ASC" | "DESC" | "NONE";

type TableBodyCellProps = {
    rightAligned?: boolean,
    onClick?: () => void
}

export const TableBodyCell: React.FC<TableBodyCellProps> = (props) => {
    const { children } = props;

    return (
        <td onClick={props.onClick} className={cs({
            "data-table__cell": true,
            "data-table__cell--right-aligned": props.rightAligned
        })}>{children}</td>
    )
}

type TableBodyRowProps = {
    onSelect?: () => void,
    selected?: boolean,
    selectId?: string,
    checkboxLabel?: string
}

export const TableBodyRow: React.FC<TableBodyRowProps> = (props) => {
    const { uniqueId } = React.useContext(UniqueIdContext);

    return (
        <tr className="data-table__row">
            {props.onSelect &&
                <TableBodyCell>
                    <Checkbox
                        className="data-table__checkbox"
                        label={props.checkboxLabel || "Velg rad"}
                        hiddenLabel={true}
                        onChange={props.onSelect}
                        checked={props.selected ? true : false}
                        id={`${uniqueId}-${props.selectId}`} />
                </TableBodyCell>}
            {props.children}
        </tr>
    )
}

type TableHeadCellProps = {
    sortable?: boolean,
    rightAligned?: boolean,
    onClick?: () => void
}

const TableHeadCell: React.FC<TableHeadCellProps> = (props) => {
    const { children } = props;

    return (
        <th className={cs({
            "data-table__cell": true,
            "data-table__cell--header": true,
            "data-table__cell--sortable": props.sortable,
            "data-table__cell--right-aligned": props.rightAligned
        })} onClick={props.onClick}>{children}</th>
    )
}

type SortedTableHeadCellProps = {
    sortDirection: SortDirection | undefined,
    rightAligned?: boolean,
    onClick: () => void
}
const SortedTableHeadCell: React.FC<SortedTableHeadCellProps> = (props) => {
    return (
        <TableHeadCell onClick={props.onClick} sortable={true} rightAligned={props.rightAligned}>
            {props.children}&nbsp;
            {props.sortDirection === "ASC" ? <Icon icon="arrow-small-up" className="data-table__icon" /> : null}
            {props.sortDirection === "DESC" ? <Icon icon="arrow-small-down" className="data-table__icon" /> : null}
            {props.sortDirection === "NONE" ? "" : null}
        </TableHeadCell>
    )
}

type TableHeading = {
    label: string,
    id: string,
    rightAligned?: boolean
}

type TableProps = {
    headings: Array<TableHeading>,

    // Required for sorting columns
    onClickColumnHeader?: (columnId: string | number) => void,
    sortedColumnId?: string | number,
    sortedColumnDirection?: SortDirection,

    // Required for "select all" functionality
    selected?: Array<String | number>,
    onSelectAll?: () => void,
    allSelected?: boolean,

    // Optional for "select all" functionality
    checkAllLabel?: string,
    uncheckAllLabel?: string,

    paging?: React.ReactNode
}

const UniqueIdContext = React.createContext<any>({ uniqueId: "styleguide-table" });

export const Table: React.FC<TableProps> = (props) => {
    const uniqueId = `table-${Math.round(Math.random()*10000)}`;
    return (
        <UniqueIdContext.Provider value={{ uniqueId }}>
        <span className="data-table">
            <table className="data-table__table">
                <thead>
                    <tr className="data-table__row data-table__row--header">
                        {props.selected &&
                            <TableHeadCell>
                                <Checkbox
                                    className="data-table__checkbox"
                                    label={props.allSelected ? props.uncheckAllLabel || "Fjern alle rader" : props.checkAllLabel || "Velg alle rader"}
                                    hiddenLabel={true}
                                    checked={props.allSelected ? true : false}
                                    partial={props.selected && props.selected.length > 0 && !props.allSelected}
                                    controls={props.selected && props.selected.map((id) => `${uniqueId}-${id}`).join(" ")}
                                    onChange={props.onSelectAll} />
                            </TableHeadCell>}
                        {_.map(props.headings, ({ id, label, rightAligned }) =>
                            props.sortedColumnId ?
                                <SortedTableHeadCell
                                    key={id}
                                    rightAligned={rightAligned}
                                    sortDirection={props.sortedColumnId === id ? props.sortedColumnDirection : "NONE"}
                                    onClick={() => props.onClickColumnHeader && props.onClickColumnHeader(id)}>{label}</SortedTableHeadCell> :
                                <TableHeadCell key={id} rightAligned={rightAligned}>{label}</TableHeadCell>)}
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
            {props.paging && <div className="data-table__paging">{props.paging}</div>}
        </span>
        </UniqueIdContext.Provider>
    )
}


export const TablePagingControls: React.FC<any> = (props) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="table-paging">
            <label className="table-paging__text">
                {props.perPageString || "Rader per side: "}
                <select value={props.perPage} onChange={(e) => props.onPerPageChange(parseInt(e.target.value))} className="table-paging__per-page">
                    {(props.selectOptions || [10, 25, 50, 100, 1000]).map((option: number, key: number) => <option value={option} key={key}>{option}</option>)}
                </select>
            </label>
            <span className="table-paging__text">
                {props.fromToString || `${props.from}-${props.to} av ${props.dataLength}`}
            </span>
            <button disabled={props.page === 1} aria-label="Forrige side" className="table-paging__button" onClick={(e) => {
                e.preventDefault();
                props.onPageChange(props.page - 1);
            }}><Icon icon="arrow-left" className="data-table__icon" /></button>
            <button disabled={props.page === props.maxPage} aria-label="Neste side" className="table-paging__button" onClick={(e) => {
                e.preventDefault();
                props.onPageChange(props.page + 1);
            }}><Icon icon="arrow-right" className="data-table__icon" /></button>
        </form>
    )
}