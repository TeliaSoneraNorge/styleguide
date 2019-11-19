import * as React from 'react';

export interface MobileMenuMenuLinks {
    heading?: {
        text?: string;
        url?: string;
    };
    links?: {
        text?: string;
        url?: string;
    }[];
}

export interface MobileMenuProps {
    isOpen?: boolean;
    LinkTemplate?: (...args: any[])=>any;
    onMobileMenuToggle?: (...args: any[])=>any;
    menuLinks?: MobileMenuMenuLinks[];
    onMenuItemSelected?: (...args: any[])=>any;
    isLoading?: boolean;
    mobileMenuCloseButtonLabel?: string;
}

const MobileMenu: React.FC<MobileMenuProps>;

export default MobileMenu;
