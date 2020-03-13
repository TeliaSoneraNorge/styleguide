import React from 'react';

export const TableBodyCell: React.FC<any> = (props) => {
    const { children } = props;

    return (
        <td>{children}</td>
    )
}

export const TableBodyRow: React.FC<any> = (props) => {
    const { children } = props;

    return (
        <tr>{children}</tr>
    )
}

const TableHeadCell: React.FC<any> = (props) => {
    const { children } = props;

    return (
        <th>{children}</th>
    )
}

interface TableProps {
    children: React.ReactChildren,
    headings: Array<String>
}

export const Table: React.FC<TableProps> = (props) => {
    const { children, headings } = props;

    return (
        <table>
            <thead>
                <tr>
                    {headings.map((heading, index) => <TableHeadCell key={index}>{heading}</TableHeadCell>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}