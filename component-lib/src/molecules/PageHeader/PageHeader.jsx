import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

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
        const menuIconSvg = this.props.isLoggedIn ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path fill-rule="evenodd" d="M3.85 9.326H1.167c-1.554 0-1.554 2.331 0 2.331H3.85c1.6.047 1.6-2.378 0-2.331zm2.99-4.664H1.167c-1.556 0-1.556 2.334 0 2.334H6.84c1.556 0 1.556-2.334 0-2.334zM1.167 2.33h10.932c1.62.067 1.62-2.397 0-2.33H1.167c-1.553 0-1.553 2.33 0 2.33z" /><path d="M14.491 7.681a2.677 2.677 0 0 1-1.155 2.203c3.06.668 3.24 2.361 3.283 3.37.009.215-.15.472-.357.526-.527.139-1.59.332-4.451.332s-3.924-.193-4.452-.332c-.209-.054-.367-.311-.358-.527.044-1.008.223-2.701 3.283-3.37a2.68 2.68 0 1 1 4.207-2.202z" /></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12"><path fill-rule="evenodd" d="M12.821 9.326H1.167a1.165 1.165 0 1 0 0 2.331h11.654a1.166 1.166 0 1 0 0-2.331zm0-4.664H1.167a1.167 1.167 0 0 0 0 2.334h11.654a1.167 1.167 0 0 0 0-2.334zM1.167 2.33h11.654a1.166 1.166 0 1 0 0-2.33H1.167a1.165 1.165 0 1 0 0 2.33z" /></svg>;

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
                    onTabSelect={this.onTabSelect} />
                <div className="page-header__site-nav">
                    <button className="page-header__menu-button page-header__icon-box" onClick={this.openMenu} aria-expanded={this.state.menuIsExpanded} aria-controls={this.props.menuId || 'page-header-menu'} aria-pressed={this.state.menuIsExpanded}>
                        <i className={"page-header__menu-button-image page-header__icon-box-icon"}>
                            {menuIconSvg}
                        </i>
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
                            <i className="page-header__cart-button-image page-header__icon-box-icon" />
                            <span className="page-header__cart-button-text">Handlekurv</span>
                            <span className="page-header__cart-item-count">
                                <span className="page-header__cart-item-count-text">{this.props.cartItemCount}</span>
                            </span>
                        </a> : null}
                    {!this.props.isLoggedIn &&
                        <a className="page-header__log-in-button" href="#">
                            <i className="page-header__log-in-button-icon page-header__icon-box-icon">
                                {<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 616 557.15"><path d="M308 72.92a126.11 126.11 0 0 1 71.85 229.81c144 31.44 161.18 93.64 163.23 141.09.43 10.14-7 22.25-16.83 24.8-24.84 6.49-83.63 15.62-218.25 15.62s-193.38-9.12-218.22-15.66c-9.81-2.56-17.28-14.67-16.85-24.8 2.05-47.45 19.24-109.66 163.22-141.09A126.1 126.1 0 0 1 308 72.92M308 0C198.21 0 108.88 89.31 108.88 199.09a198.65 198.65 0 0 0 11.24 65.83C43 302.63 3.55 360.71.09 440.68c-1.89 45.07 28.74 87.4 71.26 98.51 45.62 11.92 125.24 18 236.64 18s191.06-6 236.69-18c42.51-11.12 73.14-53.44 71.24-98.43-3.45-80.03-42.92-138.18-120.06-175.84a198.45 198.45 0 0 0 11.24-65.83C507.1 89.31 417.78 0 308 0z" /></svg>}
                            </i>
                            <span className="page-header__log-in-button-text">Logg inn</span>
                        </a>}
                </div>
            </header>
        );
    }
}
