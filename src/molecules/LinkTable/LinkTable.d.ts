import * as React from 'react';
import { IconDefinition } from '../../atoms/Icon'

export interface LinkTableProps {
    wrapByTwo?: boolean;
}

export interface LinkTableItemProps {
    text: string;
    icon?: JSX.Element | IconDefinition;
    href: string;
}

export const LinkTable: React.FC<LinkTableProps> & { Item: React.FC<LinkTableItemProps> };

export default LinkTable;