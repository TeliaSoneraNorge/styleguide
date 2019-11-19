import * as React from 'react';

export interface PageHeaderProps {
    hideMenu?: boolean;
    menuLinks?: any;
    menuId: string;
    menuSelectedTabIndex?: number;
    isLoggedIn?: boolean;
    cartItemCount: number;
    logoUrl: string;
    logoTitle: string;
    logoImageDesktopPath: string;
    logoImageDesktopPathInverted: string;
    toggleCart?: (...args: any[])=>any;
    searchUrl?: string;
    loginLink?: string;
    onLoginClick?: (...args: any[])=>any;
    logoutLink?: string;
    onLogoutClick?: (...args: any[])=>any;
}

export default class PageHeader extends React.Component<PageHeaderProps, any> {
    render(): JSX.Element;

}
