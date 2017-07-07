import classNames from 'classnames';
import React from 'react';

/**
 * Status: *in progress*.
 *
 * Work remaining: menu, toolbar, responsiveness.
 *
 * The PageHeader is the main header on the page, and should be included only once.
 * It contains the Telia logo, the main navigation, and tools such as log-in info
 * and shopping cart.
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
        return (
            <header className={classNames('page-header', { 'page-header--with-cart': cartShouldBeShown, 'page-header--menu-expanded': this.state.menuIsExpanded })}>
                <div className="page-header__menu" id={this.props.menuId || "page-header-menu"}>
                    <div className="page-header__close-menu">
                        <button className="page-header__close-menu-button page-header__icon-box" onClick={this.closeMenu} aria-expanded={this.state.menuIsExpanded} aria-controls={this.props.menuId || "page-header-menu"} aria-pressed={!this.state.menuIsExpanded}>
                            <img className="page-header__icon-box-icon" src="/public/icons/ico_delete_purple.svg" alt="Vis/skjul meny" />
                            <span className="page-header__icon-box-text">Lukk</span>
                        </button>
                    </div>
                    <form className="page-header__search" role="search">
                        <input className="page-header__search-input" type="search" placeholder="Spøk, neida... søk" />
                    </form>
                    <nav className="page-header__menu-nav">
                        <ul className="page-header__menu-item-list">
                            {_.map(this.props.menuLinks, (menuLink) =>
                                <li className="page-header__menu-item">
                                    <a className="page-header__menu-item-link" href={menuLink.url}>
                                        {menuLink.icon ? <img className="page-header__menu-item-icon" src={menuLink.icon} role="presentation" /> : null}
                                        {menuLink.text}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className={classNames('page-header__overlay', { 'page-header__overlay--active': this.state.menuIsExpanded })} onClick={this.closeMenu}></div>

                <div className="page-header__site-name-and-logo">
                    <a className="page-header__site-logo" href={this.props.logoUrl} title={this.props.logoTitle}>
                        <picture>
                            <source media="(min-width: 42em)" srcSet={this.props.logoImageDesktopPath} />
                            <img src={this.props.logoImageMobilePath} alt={this.props.logoTitle} />
                        </picture>
                    </a>
                </div>
                <div className="page-header__site-nav">
                    <button className="page-header__menu-button page-header__icon-box" onClick={this.openMenu} aria-expanded={this.state.menuIsExpanded} aria-controls={this.props.menuId || "page-header-menu"} aria-pressed={this.state.menuIsExpanded}>
                        <img className="page-header__menu-button-image page-header__icon-box-icon" src="/public/icons/ico_menu_purple.svg" alt="Vis/skjul meny" />
                        <span className="page-header__icon-box-text">Meny</span>
                    </button>
                </div>
                <div className="page-header__site-tools">
                    {cartShouldBeShown ?
                        <a className="page-header__cart-button" href="#">
                            <img className="page-header__cart-button-image" src="/public/icons/ico_buy_purple.svg" alt="Handlekurv" />
                            <span className="page-header__cart-item-count">{this.props.cartItemCount}</span>
                        </a> : null}
                    {this.props.isLoggedIn ?
                        <a className="page-header__my-account-button page-header__icon-box" href="#">
                            <img className="page-header__cart-button-image page-header__icon-box-icon" src="/public/icons/ico_enduser_purple.svg" alt="Gå til min profil" />
                            <span className="page-header__user-name page-header__icon-box-text">Hei, {this.props.loggedInUserName}</span>
                        </a> :
                        <a className="page-header__log-in-button" href="#">
                            Logg inn
                        </a>}
                </div>
            </header>
        );
    }
}
