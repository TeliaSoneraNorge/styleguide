import * as React from 'react';

export interface MenuContentMenuLink {
    links?: any[];
    heading?: {
        text?: string;
    };
}

export interface MenuContentLogo {
    url?: string;
    image?: string;
    title?: string;
}

export interface MenuContentProps {
    menuLink?: MenuContentMenuLink;
    logo?: MenuContentLogo;
    openedSubmenuIndex?: number;
    onToggleSubmenu?: (...args: any[])=>any;
    searchLabel?: string;
    searchButtonAbortText?: string;
}

const MenuContent: React.FC<MenuContentProps>;

export default MenuContent;
