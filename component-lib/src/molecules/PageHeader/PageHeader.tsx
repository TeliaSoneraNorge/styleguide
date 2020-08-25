import classNames from 'classnames';
import React from 'react';

import { preventDefault } from '../../utils';
import PageMenu from '../PageMenu/PageMenu';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type OwnProps = {
    hideMenu?: boolean;
    menuLinks?: any; // TODO: (props, propName) => { if (!props.hideMenu && (props[propName] === undefined || !Array.isArray(props[propName]))) { return new Error("PageHeader requires menuLinks to be set unless the 'hideMenu' prop equals 'true'."); } }
    menuId: string;
    menuSelectedTabIndex?: number;
    isLoggedIn?: boolean;
    cartItemCount: number;
    logoUrl: string;
    logoTitle: string;
    logoImageDesktopPath: string;
    logoImageDesktopPathInverted: string;
    toggleCart?: (...args: any[]) => any;
    searchUrl?: string;
    loginLink?: string;
    onLoginClick?: (...args: any[]) => any;
    logoutLink?: string;
    onLogoutClick?: (...args: any[]) => any;
};

type State = any;

type Props = OwnProps & typeof PageHeader.defaultProps;

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * Work remaining: menu, toolbar, responsiveness.
 *
 * The PageHeader is the main header on the page, and should be included only once.
 * It contains the Telia logo, the main navigation, and tools such as log-in info
 * and shopping cart.
 *
 */
export default class PageHeader extends React.Component<Props, State> {

  static defaultProps = {
    hideMenu: false,
    menuSelectedTabIndex: 0,
    isLoggedIn: false,
    loginLink: '#',
    logoutLink: '#',
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      menuIsExpanded: false,
      menuSelectedTabIndex: this.props.menuSelectedTabIndex,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.onTabSelect = this.onTabSelect.bind(this);
  }
  onTabSelect(menuSelectedTabIndex: any) {
    this.setState({ menuSelectedTabIndex });
  }
  openMenu() {
    this.setState({ menuIsExpanded: true });
  }
  closeMenu() {
    this.setState({ menuIsExpanded: false });
  }
  render() {
    const cartShouldBeShown = this.props.cartItemCount > 0;
    const menuIconName = this.props.isLoggedIn ? 'ico_menu_logged_in' : 'ico_menu';
    return (
      <header className={classNames('page-header', { 'page-header--with-cart': cartShouldBeShown })}>
        {!this.props.hideMenu && (
          <PageMenu
            menuLinks={this.props.menuLinks}
            menuId={this.props.menuId}
            isExpanded={this.state.menuIsExpanded}
            onClickClose={this.closeMenu}
            fixedPosition
            isLoggedIn={this.props.isLoggedIn}
            menuSelectedTabIndex={this.state.menuSelectedTabIndex}
            onTabSelect={this.onTabSelect}
            searchUrl={this.props.searchUrl}
            logoutLink={this.props.logoutLink}
            // @ts-expect-error ts-migrate(2322) FIXME: Property 'onLogoutClick' does not exist on type 'I... Remove this comment to see the full error message
            onLogoutClick={this.props.onLogoutClick}
          />
        )}
        <div className="page-header__site-nav">
          {!this.props.hideMenu && (
            <button
              className="page-header__menu-button page-header__icon-box"
              onClick={this.openMenu}
              aria-expanded={this.state.menuIsExpanded}
              aria-controls={this.props.menuId || 'page-header-menu'}
              aria-pressed={this.state.menuIsExpanded}
            >
              <SvgIcon
                className="page-header__menu-button-image page-header__icon-box-icon"
                iconName={menuIconName}
                color="black"
              />
              <span className="page-header__icon-box-text">Meny</span>
            </button>
          )}
        </div>
        <a className="page-header__site-logo" href={this.props.logoUrl} title={this.props.logoTitle}>
          <img
            className="page-header__site-logo-img"
            src={this.props.logoImageDesktopPath}
            alt={this.props.logoTitle}
          />
          <img
            className="page-header__site-logo-img page-header__site-logo-img--inverted"
            src={this.props.logoImageDesktopPathInverted}
            alt={this.props.logoTitle}
          />
        </a>
        <div className="page-header__site-tools">
          {cartShouldBeShown ? (
            <button className="page-header__cart-button" onClick={this.props.toggleCart}>
              <SvgIcon
                className="page-header__cart-button-image page-header__icon-box-icon"
                iconName="ico_buy"
                color="black"
              />
              <span className="page-header__cart-button-text">Handlekurv</span>
              <span className="page-header__cart-item-count">
                <span className="page-header__cart-item-count-text">{this.props.cartItemCount}</span>
              </span>
            </button>
          ) : null}
          {!this.props.isLoggedIn && (
            <a
              className="page-header__log-in-button"
              href={this.props.loginLink}
              onClick={preventDefault(this.props.onLoginClick)}
            >
              <SvgIcon
                className="page-header__log-in-button-icon page-header__icon-box-icon"
                iconName="ico_end_user"
                color="black"
              />
              <span className="page-header__log-in-button-text">Logg inn</span>
            </a>
          )}
        </div>
      </header>
    );
  }
}
