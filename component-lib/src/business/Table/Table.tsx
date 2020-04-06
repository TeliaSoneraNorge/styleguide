import React from 'react';
import _ from 'lodash';
import cs from 'classnames';

import {Icon} from '../../atoms/Icon';
import {Checkbox} from '../Checkbox';

export type SortDirection = "ASC" | "DESC" | "NONE";

export const TableBodyCell: React.FC<any> = (props) => {
    const { children } = props;

    return (
        <td className={cs({
            "data-table__cell": true,
            "data-table__cell--right-aligned": props.rightAligned
        })}>{children}</td>
    )
}

interface TableBodyRowProps {
    children: React.ReactNode,
    onSelect?: () => void,
    selected?: boolean,
    selectId: string | number
}

export const TableBodyRow: React.FC<TableBodyRowProps> = ({children, onSelect, selected, selectId}) => {

    return (
        <tr className="data-table__row">
            {onSelect &&
                <TableBodyCell><Checkbox label="Select/unselect row" hiddenLabel={true} onChange={() => onSelect()} checked={selected} id={selectId} /></TableBodyCell>}
            {children}
        </tr>
    )
}

const TableHeadCell: React.FC<any> = (props) => {
    const { children } = props;

    return (
        <th className={cs({
            "data-table__cell": true,
            "data-table__cell--header": true,
            "data-table__cell--sortable": props.sortable,
            "data-table__cell--right-aligned": props.rightAligned
        })} onClick={props.onClick ? () => props.onClick() : null
        }>{children}</th>
    )
}

type SortedTableHeadCellProps = {
    children: React.ReactNode,
    sortDirection: SortDirection,
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

type TableProps = {
    headings: Array<{ id: string, label: string, rightAligned: boolean }>,
    children: React.ReactNode,
    onSelectAll?: () => void,
    allSelected?: boolean,
    selected: Array<String | number>,
    onClickColumnHeader?: (columnId: string | number) => void,
    sortedColumnId?: string | number,
    sortedColumnDirection?: SortDirection,
    paging?: React.ReactNode
}

export const Table: React.FC<TableProps> = (props) => {
    return (
        <span className="data-table">
        <table className="data-table__table">
            <thead>
                <tr className="data-table__row data-table__row--header">
                    {props.onSelectAll &&
                        <TableHeadCell>
                            <Checkbox
                                label={props.allSelected ? "Uncheck all rows" : "Check all rows" }
                                hiddenLabel={true}
                                checked={props.allSelected}
                                mixed={props.selected && props.selected.length > 0 && !props.allSelected}
                                controls={props.selected && props.selected.join(" ")}
                                onChange={() => props.onSelectAll()} />
                                </TableHeadCell>}
                    {_.map(props.headings, ({id, label, rightAligned}) =>
                        props.sortedColumnId ?
                        <SortedTableHeadCell key={id} rightAligned={rightAligned} sortDirection={props.sortedColumnId === id ? props.sortedColumnDirection : "NONE"} onClick={() => props.onClickColumnHeader(id)}>{label}</SortedTableHeadCell> :
                        <TableHeadCell key={id} rightAligned={rightAligned}>{label}</TableHeadCell>)}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
        {props.paging && <div className="data-table__paging">{props.paging}</div>}
        </span>
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
            <button disabled={props.page === 1} className="table-paging__button" onClick={(e) => {
                e.preventDefault();
                props.onPageChange(props.page-1);
            }}><Icon icon="arrow-left" className="data-table__icon" /></button>
            <button disabled={props.page === props.maxPage} className="table-paging__button" onClick={(e) => {
                e.preventDefault();
                props.onPageChange(props.page+1);
            }}><Icon icon="arrow-right" className="data-table__icon" /></button>
        </form>
    )
}