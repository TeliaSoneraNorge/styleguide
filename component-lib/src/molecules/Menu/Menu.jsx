import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import MenuTop from './MenuTop';
import MenuContent from './MenuContent';
import MobileMenu from './MobileMenu';

const defaultLinkTemplate = ({ url, ...otherProps }) =>
    <a href={url} {...otherProps} />;


const isDescendant = (parent, child) => {
    while (child) {
        if (child === parent) {
            return true;
        }
        child = child.parentNode;
    }
    return false;
};

/**
 * Status: *In progress*.
 * Category: PageElements
 **/
export default class Menu extends React.Component {
    static propTypes = {
        menuLinks: PropTypes.array,
        logoImageDesktopPath: PropTypes.string,
        logoImageInverseDesktopPath: PropTypes.string,
        logoTitle: PropTypes.string,
        logoUrl: PropTypes.string,
        activeIndex: PropTypes.number,
        activeLinkIndex: PropTypes.number,
        onSearchSubmit: PropTypes.func,
        linkTemplate: PropTypes.func,
        lockBodyOnMenuOpen: PropTypes.bool,
        isLoggedIn: PropTypes.bool,
        loginUrl: PropTypes.string,
        myPageUrl: PropTypes.string,
        cartUrl: PropTypes.string,
        isLoading: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            mobileMenuOpen: false,
            openedSubmenuIndex: -1
        };

        this.closeMobileMenu = this.toggleMobileMenu.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.toggleSubmenu = this.toggleSubmenu.bind(this);
        this.onClickaway = this.onClickaway.bind(this);
        this.onGlobalKeyDown = this.onGlobalKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.onClickaway);
        document.addEventListener('keydown', this.onGlobalKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickaway);
        document.removeEventListener('keydown', this.onGlobalKeyDown);
    }

    onGlobalKeyDown(e) {
        const key = e.which || e.keyCode;

        if (key === 27 && this.state.openedSubmenuIndex !== -1) { // escape key
            this.toggleSubmenu(this.state.openedSubmenuIndex, e);
        }
    }

    onClickaway(event) {
        if (!this.openedSubmenu) return;
        if (isDescendant(this.openedSubmenu, event.target)) return;

        this.setState({ openedSubmenuIndex: -1 });
        this.openedSubmenu = null;
    }

    toggleMobileMenu() {
        if (!this.state.mobileMenuOpen && this.props.lockBodyOnMenuOpen) {
            document.body.classList.add('body--locked');
        } else {
            document.body.classList.remove('body--locked');
        }

        this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
    }

    toggleSubmenu(submenuIndex, event) {
        event.stopPropagation();

        if (this.state.openedSubmenuIndex === submenuIndex) {
            this.setState({ openedSubmenuIndex: -1 });
            this.openedSubmenu = null;
        } else {
            this.setState({ openedSubmenuIndex: submenuIndex });
            this.openedSubmenu = event.target;
        }
    }

    render() {
        const LinkTemplate = this.props.linkTemplate || defaultLinkTemplate;
        const {
            openedSubmenuIndex,
            mobileMenuOpen
        } = this.state;

        const {
            menuLinks,
            logoUrl = '/',
            logoImageDesktopPath,
            logoImageInverseDesktopPath,
            logoTitle,
            onSearchSubmit,
            isLoggedIn,
            loginUrl,
            myPageUrl,
            activeIndex = 0,
            activeLinkIndex = -1,
            cartUrl,
            isLoading
        } = this.props;

        const logo = {
            image: logoImageDesktopPath,
            imageInverted: logoImageInverseDesktopPath,
            title: logoTitle,
            url: logoUrl
        };

        return (
            <div className={classnames('menu', { [this.props.className]: this.props.className })}>
                {menuLinks && menuLinks.length > 1 &&
                <MenuTop
                    activeIndex={activeIndex}
                    menuLinks={menuLinks}
                    LinkTemplate={LinkTemplate}
                />
                }

                <MenuContent
                    logo={logo}
                    LinkTemplate={LinkTemplate}
                    menuLink={menuLinks && menuLinks[activeIndex]}
                    onToggleSubmenu={this.toggleSubmenu}
                    openedSubmenuIndex={openedSubmenuIndex}
                    activeIndex={activeLinkIndex}
                    loginUrl={loginUrl}
                    onMobileMenuToggle={this.toggleMobileMenu}
                    onSearchSubmit={onSearchSubmit}
                    isLoggedIn={isLoggedIn}
                    myPageUrl={myPageUrl}
                    isLoading={isLoading}
                />

                <MobileMenu
                    isOpen={mobileMenuOpen}
                    LinkTemplate={LinkTemplate}
                    onMobileMenuToggle={this.toggleMobileMenu}
                    menuLinks={menuLinks}
                    selectedHeaderIndex={activeIndex}
                    onMenuItemSelected={this.toggleMobileMenu}
                    isLoading={isLoading}
                />
            </div>
        );
    }
}