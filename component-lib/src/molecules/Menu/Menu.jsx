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
}

/**
 * Status: *In progress*.
 **/
export default class Menu extends React.Component {
    static propTypes = {
        menuLinks: PropTypes.array,
        logoImageDesktopPath: PropTypes.string,
        logoTitle: PropTypes.string,
        activeIndex: PropTypes.number,
        onSearchSubmit: PropTypes.func,
        linkTemplate: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            mobileMenuOpen: false,
            openedSubmenuIndex: -1
        };

        this.closeMobileMenu = this.closeMobileMenu.bind(this);
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

        if (key === 27 && this.openedSubmenuIndex !== -1) { // escape key
            this.toggleSubmenu(this.openedSubmenuIndex, e);
        }
    }

    onClickaway(event) {
        if (!this.openedSubmenu) return;
        if (isDescendant(this.openedSubmenu, event.target)) return;

        this.setState({ openedSubmenuIndex: -1 });
        this.openedSubmenu = null;
    }

    toggleMobileMenu() {
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

    closeMobileMenu() {
        this.setState({ mobileMenuOpen: false });
    }

    render() {
        const LinkTemplate = this.props.linkTemplate || defaultLinkTemplate;

        const {
            menuLinks,
            logoUrl,
            logoImageDesktopPath,
            logoTitle,
            activeIndex,
            loginUrl,
            onSearchSubmit,
        } = this.props;

        const logo = {
            image: logoImageDesktopPath,
            title: logoTitle,
            url: logoUrl
        };

        return (
            <div className={classnames('menu', { [this.props.className]: this.props.className })}>
                <MenuTop
                    LinkTemplate={LinkTemplate}
                    activeIndex={activeIndex}
                    loginUrl={loginUrl}
                    logo={logo}
                    menuLinks={menuLinks}
                    onMobileMenuToggle={this.toggleMobileMenu}
                    onSearchSubmit={onSearchSubmit}
                />
                <MenuContent
                    LinkTemplate={LinkTemplate}
                    menuLink={menuLinks[activeIndex]}
                    onToggleSubmenu={this.toggleSubmenu}
                    openedSubmenuIndex={this.state.openedSubmenuIndex}
                />
                <MobileMenu
                    isOpen={this.state.mobileMenuOpen}
                    LinkTemplate={LinkTemplate}
                    onMobileMenuToggle={this.toggleMobileMenu}
                    menuLinks={menuLinks}
                    selectedHeaderIndex={activeIndex}
                    onMenuItemSelected={this.closeMobileMenu}
                />
            </div>
        );
    }
}