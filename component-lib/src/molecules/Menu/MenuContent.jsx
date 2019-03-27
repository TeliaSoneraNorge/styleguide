import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const onSubmenuKeyPress = (e, onToggleSubmenu) => {
    const key = e.which || e.keyCode;
    if (key === 13) { // 13 = enter
        onToggleSubmenu(e);
    }
  };

const ItemWithSubmenu = ({ onToggleSubmenu, isOpen, link, LinkTemplate  }) => (
    <div tabIndex="0" className="menu__item link menu__submenu"
        onKeyPress={(e) => onSubmenuKeyPress(e, onToggleSubmenu)}>
        <span className=""  onClick={onToggleSubmenu}>
            {link.text}
            <SvgIcon
                iconName="ico_dropArrow"
                color="purple"
                className={classnames(
                    'icon-link__icon menu__submenu-icon',
                    { 'menu__submenu-icon--open': isOpen })} />
        </span>
        <div className={classnames('menu__submenu-container', { 'menu__submenu-container--open': isOpen })}>
            {link.subLinks.map((sublink, index) =>
                <LinkTemplate key={index} className="menu__subitem link" url={sublink.url}>
                    {sublink.text}
                </LinkTemplate>)}
        </div>
    </div>
)

const MenuLinkItem = ({ link, LinkTemplate, onToggleSubmenu, isSubmenuOpen }) => (
    <li>
        {link.url && <LinkTemplate className="menu__item link" url={link.url}>{link.text}</LinkTemplate>}
        {!link.url && <ItemWithSubmenu
            link={link}
            onToggleSubmenu={onToggleSubmenu}
            isOpen={isSubmenuOpen}
            LinkTemplate={LinkTemplate} />}
    </li>
);

const MenuContent = ({ menuLink, openedSubmenuIndex, onToggleSubmenu, LinkTemplate }) => (
    <div className="menu__content">
        <ul id={`${menuLink.heading.text}-panel`} className="menu__content-panel">
            {menuLink.links.map((link, index) => (
                <MenuLinkItem
                    LinkTemplate={LinkTemplate}
                    isSubmenuOpen={openedSubmenuIndex === index}
                    onToggleSubmenu={(event) => onToggleSubmenu(index, event)}
                    key={index}
                    link={link} />))}
        </ul>
    </div>
);

MenuContent.propTypes = {
    menuLink: PropTypes.shape({
        links: PropTypes.array,
        heading: PropTypes.shape({
            text: PropTypes.string
        })
    }),
    openedSubmenuIndex: PropTypes.number,
    onToggleSubmenu: PropTypes.func
}

export default MenuContent;