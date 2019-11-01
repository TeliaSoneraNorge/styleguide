import React from 'react';
import classnames from 'classnames';
import Spinner from '../../atoms/Spinner';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const MobileMenuCloseButton = ({ onClick, mobileMenuCloseButtonLabel }) => (
    <button className="menu__mobile-close-button" 
        onClick={onClick} 
        aria-label={mobileMenuCloseButtonLabel ? mobileMenuCloseButtonLabel : 'Lukk'} >
        <SvgIcon
            iconName="ico_delete"
            color="black"
            className="menu__mobile-close-button-icon" />
    </button>
);

const MobileMenuHeaderItem = ({ index, onHeaderItemSelected, menuLink, isActive }) => (
    <li>
        <div onClick={() => onHeaderItemSelected(index)} tabIndex="0"
            className={classnames(
                'menu__mobile-heading-item', {
                    'menu__mobile-heading-item--active': isActive,
                })}>
            <span className="menu__mobile-heading-item-text">{menuLink.heading && menuLink.heading.text}</span>
        </div>
    </li>
);

const MobileMenuHeader = ({
    onMobileMenuToggle,
    menuLinks,
    LinkTemplate,
    selectedIndex,
    onHeaderItemSelected,
    mobileMenuCloseButtonLabel }) => (
    <div className="menu__mobile-header">
        {menuLinks &&
        <ul className="menu__mobile-heading-links">
            {menuLinks.map((menuLink, index) => <MobileMenuHeaderItem
                key={menuLink.heading ? menuLink.heading.text : index}
                index={index}
                LinkTemplate={LinkTemplate}
                menuLink={menuLink}
                isActive={selectedIndex === index}
                onHeaderItemSelected={onHeaderItemSelected} />)}
        </ul>
        }
        <MobileMenuCloseButton onClick={onMobileMenuToggle} mobileMenuCloseButtonLabel={mobileMenuCloseButtonLabel} />
    </div>
);

const MobileSubmenu = ({ link, LinkTemplate, onItemSelected }) => (
    <div className="menu__mobile-submenu">
        <span className="menu__mobile-item-with-children">{link.text}</span>
        <div className="menu__mobile-submenu-container">
            {link.subLinks.map((sublink, index) =>
                <LinkTemplate
                    onClick={() => onItemSelected(index, sublink)}
                    key={sublink.text}
                    className="menu__mobile-subitem link"
                    url={sublink.url}>
                    <span className="link__content">{sublink.text}</span>
                </LinkTemplate>
            )}
        </div>
    </div>
);

const MobileMenuItem = ({ index, link, onItemSelected, LinkTemplate }) => (
    <React.Fragment>
        {link.url &&
            <LinkTemplate
                onClick={onItemSelected}
                className="menu__mobile-item link"
                url={link.url}>
                <span className="link__content">{link.text}</span>
            </LinkTemplate>}
        {!link.url && <MobileSubmenu link={link} onItemSelected={onItemSelected} LinkTemplate={LinkTemplate} />}
    </React.Fragment>
);

const MobileMenuItemSection = ({ menuLink, onItemSelected, LinkTemplate }) => (
    <section id={`${menuLink.heading && menuLink.heading.text}-mobile-panel`} className="menu__mobile-panel">
        {menuLink.heading && menuLink.heading.url &&
            <LinkTemplate
                onClick={onItemSelected}
                className="menu__mobile-item link"
                url={menuLink.heading.url}>
                <span className="link__content">Forside</span>
            </LinkTemplate>
        }

        {menuLink.links.map((link, index) =>
            <MobileMenuItem
                index={index}
                key={link.text}
                link={link}
                onItemSelected={onItemSelected}
                LinkTemplate={LinkTemplate} />)}

    </section>
);

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHeaderIndex: 0
        };
    }

    render() {
        const {
            selectedHeaderIndex
        } = this.state;

        const {
            isOpen,
            LinkTemplate,
            onMobileMenuToggle,
            menuLinks,
            onMenuItemSelected,
            isLoading,
            mobileMenuCloseButtonLabel
        } = this.props;

        return (
            <div className={classnames('menu__mobile', { 'menu__mobile--open': isOpen })}>
                <MobileMenuHeader
                    onMobileMenuToggle={onMobileMenuToggle}
                    menuLinks={menuLinks}
                    LinkTemplate={LinkTemplate}
                    selectedIndex={selectedHeaderIndex}
                    onHeaderItemSelected={index => this.setState({ selectedHeaderIndex: index })}
                    mobileMenuCloseButtonLabel={mobileMenuCloseButtonLabel} />
                {isLoading && <Spinner />}
                {menuLinks &&
                <MobileMenuItemSection
                    menuLink={menuLinks[selectedHeaderIndex]}
                    onItemSelected={onMenuItemSelected}
                    LinkTemplate={LinkTemplate} />
                }
            </div>
        );
    };
}

export default MobileMenu;