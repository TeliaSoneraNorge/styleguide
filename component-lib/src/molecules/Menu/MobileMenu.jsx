import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const MobileMenuCloseButton = ({ onClick }) => (
    <button className="menu__mobile-close-button" onClick={onClick}>
        <SvgIcon
            iconName="ico_delete"
            color="white"
            className="menu__mobile-close-button-icon" />
    </button>
)

const MobileMenuHeaderItem = ({ onItemSelected, menuLink, isActive, LinkTemplate }) => (
    <li>
        <LinkTemplate onClick={onItemSelected} url={`${menuLink.heading.url}`}
            className={classnames(
                'menu__mobile-heading-item link', {
                'menu__mobile-heading-item--active': isActive,
            })}>
            {menuLink.heading.text}
        </LinkTemplate>
    </li>
)

const MobileMenuHeader = ({
    onMobileMenuToggle,
    menuLinks,
    LinkTemplate,
    selectedIndex }) => (
    <div className="menu__mobile-header">
        <MobileMenuCloseButton onClick={onMobileMenuToggle} />
        <ul className="menu__mobile-heading-links">
            {menuLinks.map((menuLink, index) => <MobileMenuHeaderItem
                key={index}
                LinkTemplate={LinkTemplate}
                menuLink={menuLink}
                isActive={selectedIndex === index}
            />)}
        </ul>
    </div>
)

const MobileSubmenu = ({ link, LinkTemplate, onItemSelected }) => (
    <div className="menu__mobile-submenu">
        <span className="menu__mobile-item-with-children">{link.text}</span>
        <div className="menu__mobile-submenu-container">
            {link.subLinks.map((sublink, index) =>
                <LinkTemplate
                    onClick={() => onItemSelected(index, sublink)}
                    key={index}
                    className="menu__mobile-subitem link"
                    url={sublink.url}>
                    {sublink.text}
                </LinkTemplate>)}
        </div>
    </div>
)

const MobileMenuItem = ({ index, link, onItemSelected, LinkTemplate }) => (
    <React.Fragment>
        {link.url &&
            <LinkTemplate
                onClick={() => onItemSelected(index, link)}
                className="menu__mobile-item link"
                url={link.url}>
                {link.text}
            </LinkTemplate>}
        {!link.url && <MobileSubmenu link={link} onItemSelected={onItemSelected} LinkTemplate={LinkTemplate} />}
    </React.Fragment>
)

const MobileMenuItemSection = ({ menuLink, onItemSelected, LinkTemplate }) => (
    <section id={`${menuLink.heading.text}-panel`} className="menu__mobile-panel">
         {menuLink.links.map((link, index) =>
            <MobileMenuItem
                index={index}
                key={index}
                link={link}
                onItemSelected={onItemSelected}
                LinkTemplate={LinkTemplate} />)}
    </section>
)

const MobileMenu = ({
    isOpen,
    LinkTemplate,
    onMobileMenuToggle,
    menuLinks,
    selectedHeaderIndex,
    onMenuItemSelected
}) => (
    <div className={classnames('menu__mobile', { 'menu__mobile--open': isOpen })}>
        <MobileMenuHeader
            onMobileMenuToggle={onMobileMenuToggle}
            menuLinks={menuLinks}
            LinkTemplate={LinkTemplate}
            selectedIndex={selectedHeaderIndex}
        />
        <MobileMenuItemSection
            menuLink={menuLinks[selectedHeaderIndex]}
            onItemSelected={onMenuItemSelected}
            LinkTemplate={LinkTemplate}
        />
    </div>
);

export default MobileMenu;