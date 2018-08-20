import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import PageMenu from '../PageMenu/PageMenu';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *in progress*.
 *
 * Work remaining: menu, toolbar, responsiveness.
 *
 * The PageHeader is the main header on the page, and should be included only once.
 * It contains the Telia logo, the main navigation, and tools such as log-in info
 * and shopping cart.
 *
 */
export default class PageHeader extends React.Component {
    static propTypes = {
        menuLinks: PropTypes.array.isRequired,
        menuId: PropTypes.string.isRequired,
        isLoggedIn: PropTypes.bool,
        cartItemCount: PropTypes.number.isRequired,
        logoUrl: PropTypes.string.isRequired,
        logoTitle: PropTypes.string.isRequired,
        logoImageDesktopPath: PropTypes.string.isRequired,
        logoImageDesktopPathInverted: PropTypes.string.isRequired,
    };
    constructor(props) {
        super(props);

        this.state = {
            menuIsExpanded: false,
            menuSelectedTabIndex: 0
        };

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.onTabSelect = this.onTabSelect.bind(this);
    }
    onTabSelect(menuSelectedTabIndex) {
        this.setState({ menuSelectedTabIndex });
    }
    openMenu() {
        this.setState({ menuIsExpanded: true });
    }
    closeMenu() {
        this.setState({ menuIsExpanded: false });
    }
    render() {
        const cartShouldBeShown = (this.props.cartItemCount > 0);
        const menuIconName = this.props.isLoggedIn ? "ico_menu_logged_in" : "ico_menu";
        return (
            <header className={classNames('page-header', { 'page-header--with-cart': cartShouldBeShown })}>
                <PageMenu
                    menuLinks={this.props.menuLinks}
                    menuId={this.props.menuId}
                    isExpanded={this.state.menuIsExpanded}
                    onClose={this.closeMenu}
                    fixedPosition
                    isLoggedIn={this.props.isLoggedIn}
                    menuSelectedTabIndex={this.state.menuSelectedTabIndex}
                    onTabSelect={this.onTabSelect}
                    searchUrl="#PageHeader" />
                <div className="page-header__site-nav">
                    <button className="page-header__menu-button page-header__icon-box" onClick={this.openMenu} aria-expanded={this.state.menuIsExpanded} aria-controls={this.props.menuId || 'page-header-menu'} aria-pressed={this.state.menuIsExpanded}>
                        <SvgIcon className="page-header__menu-button-image page-header__icon-box-icon" iconName={menuIconName} color="black" />
                        <span className="page-header__icon-box-text">Meny</span>
                    </button>
                </div>
                <a className="page-header__site-logo" href={this.props.logoUrl} title={this.props.logoTitle}>
                    <img className="page-header__site-logo-img" src={this.props.logoImageDesktopPath} alt={this.props.logoTitle} />
                    <img className="page-header__site-logo-img page-header__site-logo-img--inverted" src={this.props.logoImageDesktopPathInverted} alt={this.props.logoTitle} />
                </a>
                <div className="page-header__site-tools">
                    {cartShouldBeShown ?
                        <a className="page-header__cart-button" href="#">
                            <SvgIcon className="page-header__cart-button-image page-header__icon-box-icon" iconName="ico_buy" color="black" />
                            <span className="page-header__cart-button-text">Handlekurv</span>
                            <span className="page-header__cart-item-count">
                                <span className="page-header__cart-item-count-text">{this.props.cartItemCount}</span>
                            </span>
                        </a> : null}
                    {!this.props.isLoggedIn &&
                        <a className="page-header__log-in-button" href="#">
                            <SvgIcon className="page-header__log-in-button-icon page-header__icon-box-icon" iconName="ico_end_user" color="black" />
                            <span className="page-header__log-in-button-text">Logg inn</span>
                        </a>}
                </div>
            </header>
        );
    }
}
