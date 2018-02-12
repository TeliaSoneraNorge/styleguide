import classNames from 'classnames';
import React from 'react';
import PageMenu from '../PageMenu/PageMenu';

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
    constructor(props) {
        super(props);

        this.state = {
            menuIsExpanded: false
        };

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    openMenu() {
        this.setState({ menuIsExpanded: true });
    }
    closeMenu() {
        this.setState({ menuIsExpanded: false });
    }
    render() {
        const cartShouldBeShown = (this.props.cartItemCount > 0);
        const menuIconClass = this.props.isLoggedIn
            ? 'page-header__menu-button-image page-header__menu-button-image--logged-in'
            : 'page-header__menu-button-image';

        return (
            <header className={classNames('page-header', { 'page-header--with-cart': cartShouldBeShown })}>
                <PageMenu
                    links={this.props.menuLinks}
                    menuId={this.props.menuId}
                    isExpanded={this.state.menuIsExpanded}
                    onClose={this.closeMenu}
                    fixedPosition
                />
                <div className="page-header__site-nav">
                    <button className="page-header__menu-button page-header__icon-box" onClick={this.openMenu} aria-expanded={this.state.menuIsExpanded} aria-controls={this.props.menuId || "page-header-menu"} aria-pressed={this.state.menuIsExpanded}>
                        <i className={`${menuIconClass} page-header__icon-box-icon`} />
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
                            <i className="page-header__cart-button-image" />
                            <span className="page-header__cart-item-count">{this.props.cartItemCount}</span>
                        </a> : null}
                    {!this.props.isLoggedIn &&
                        <a className="page-header__log-in-button" href="#">
                            <i className="page-header__log-in-button-icon"/>
                            <span className="page-header__log-in-button-text">Logg inn</span>
                        </a>}
                </div>
            </header>
        );
    }
}
