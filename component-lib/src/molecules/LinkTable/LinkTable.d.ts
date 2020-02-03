import * as React from 'react';

export interface LinkTableProps {

}

export interface LinkTableItemProps {
    text: string;
    icon: string;
    href: string;
}

const LinkTable: React.FC<LinkTableProps> & { Item: React.FC<LinkTableItemProps> };

export default LinkTable;