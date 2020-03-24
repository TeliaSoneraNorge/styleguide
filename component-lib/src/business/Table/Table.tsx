import React from 'react';
import _ from 'lodash';

export type SortDirection = "ASC" | "DESC" | "NONE";

export const TableBodyCell: React.FC<any> = (props) => {
    const { children } = props;

    return (
        <td>{children}</td>
    )
}

interface TableBodyRowProps {
    children: React.ReactNode,
    onSelect?: () => void,
    selected?: boolean
}

export const TableBodyRow: React.FC<TableBodyRowProps> = ({children, onSelect, selected}) => {

    return (
        <tr>
            {onSelect &&
                <TableBodyCell><input type="checkbox" onChange={() => onSelect()} checked={selected} /></TableBodyCell>}
            {children}
        </tr>
    )
}

const TableHeadCell: React.FC<any> = (props) => {
    const { children } = props;

    return (
        <th onClick={props.onClick ? () => props.onClick() : null
        }>{children}</th>
    )
}

type SortedTableHeadCellProps = {
    children: React.ReactNode,
    sortDirection: SortDirection,
    onClick: () => void
}
const SortedTableHeadCell: React.FC<SortedTableHeadCellProps> = (props) => {
    return (
        <TableHeadCell onClick={props.onClick}>
            {props.children}
            {props.sortDirection === "ASC" ? "v" : null}
            {props.sortDirection === "DESC" ? "^" : null}
            {props.sortDirection === "NONE" ? "|" : null}
        </TableHeadCell>
    )
}

type TableProps = {
    headings: Array<String> | Map<String | number, string>,
    children: React.ReactNode,
    onSelectAll?: () => void,
    allSelected?: boolean,
    onClickColumnHeader?: (columnId: string | number) => void,
    sortedColumnId?: string | number,
    sortedColumnDirection?: SortDirection
}

export const Table: React.FC<TableProps> = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    {props.onSelectAll &&
                        <TableHeadCell><input type="checkbox" checked={props.allSelected} onChange={() => props.onSelectAll()} /></TableHeadCell>}
                    {_.map(props.headings, (heading, key) =>
                        props.sortedColumnId ?
                        <SortedTableHeadCell key={key} sortDirection={props.sortedColumnId === key ? props.sortedColumnDirection : "NONE"} onClick={() => props.onClickColumnHeader(key)}>{heading}</SortedTableHeadCell> :
                        <TableHeadCell key={key}>{heading}</TableHeadCell>)}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}


export const TablePagingControls: React.FC<any> = (props) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>
            {props.perPageString || "Rader per side: "}
            <select value={props.perPage} onChange={(e) => props.onPerPageChange(parseInt(e.target.value))}>
                {(props.selectOptions || [10, 25, 50, 100, 1000]).map((option: number, key: number) => <option value={option} key={key}>{option}</option>)}
            </select>
            </label>
            <span>
                {props.fromToString || `${props.from}-${props.to} av ${props.dataLength}`}
            </span>
            <button disabled={props.page === 1} onClick={(e) => {
                e.preventDefault();
                props.onPageChange(props.page-1);
            }}>&lt;</button>
            <button disabled={props.page === props.maxPage} onClick={(e) => {
                e.preventDefault();
                props.onPageChange(props.page+1);
            }}>&gt;</button>
        </form>
    )
}