import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import MenuSearch from './MenuSearch';

const onSubmenuKeyPress = (e, onToggleSubmenu) => {
    const key = e.which || e.keyCode;
    if (key === 13) { // 13 = enter
        onToggleSubmenu(e);
    }
  };

const ItemWithSubmenu = ({ onToggleSubmenu, isOpen, link, LinkTemplate  }) => (
    <div tabIndex="0" className="menu__item link menu__submenu"
        onKeyPress={(e) => onSubmenuKeyPress(e, onToggleSubmenu)}>
        <span className="menu__submenu-link"  onClick={onToggleSubmenu}>
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
                <LinkTemplate
                    key={index}
                    className="menu__subitem link"
                    url={sublink.url}>
                    <span className="link__content">{sublink.text}</span>
                </LinkTemplate>
            )}
        </div>
    </div>
)

const MenuLinkItem = ({ link, LinkTemplate, onToggleSubmenu, isSubmenuOpen }) => (
    <li>
        {link.url &&
            <LinkTemplate
                className="menu__item link"
                url={link.url}>
                <span className="link__content">{link.text}</span>
            </LinkTemplate>
        }
        {!link.url && <ItemWithSubmenu
            link={link}
            onToggleSubmenu={onToggleSubmenu}
            isOpen={isSubmenuOpen}
            LinkTemplate={LinkTemplate} />}
    </li>
);

const LoginButton = ({ loginUrl }) => (
    <a href={loginUrl} className="menu__login-button button button--small">
        <SvgIcon className="menu__login-button-icon" iconName="ico_login" color="none" />
        logg inn
    </a>
);

const MyPageButton = ({ myPageUrl }) => (
    <a href={myPageUrl} className="menu__mypage-button button button--small">
        <SvgIcon className="menu__mypage-button-icon" iconName="ico_login" color="none" />
        min side
    </a>
);

const MobileMenuButton = ({ onMenuToggle }) => (
    <button className="menu__mobile-button" onClick={onMenuToggle}>
        <SvgIcon className="menu__mobile-button-icon" iconName="ico_menu_mobile" color="black" />
        <span className="menu__mobile-button-text">Meny</span>
    </button>
)

const MenuContent = ({ menuLink, openedSubmenuIndex, onToggleSubmenu, logo, LinkTemplate, onMobileMenuToggle, onSearchSubmit, isLoggedIn, loginUrl, myPageUrl }) => (
    <div className="menu__content">
        <MenuLogo LinkTemplate={LinkTemplate} logo={logo} />
        <ul id={`${menuLink.heading.text}-panel`} className="menu__content-panel">
            {menuLink.links.map((link, index) => (
                <MenuLinkItem
                    LinkTemplate={LinkTemplate}
                    isSubmenuOpen={openedSubmenuIndex === index}
                    onToggleSubmenu={(event) => onToggleSubmenu(index, event)}
                    key={index}
                    link={link} />))}
        </ul>
        <div className="menu__content-right">
            { onSearchSubmit &&
                <MenuSearch onSearchSubmit={onSearchSubmit} />
            }
            { loginUrl && !isLoggedIn &&
                <LoginButton loginUrl={loginUrl} />
            }
            { myPageUrl && isLoggedIn &&
                <MyPageButton myPageUrl={myPageUrl} />
            }
            <MobileMenuButton onMenuToggle={onMobileMenuToggle} />
        </div>
    </div>
);

const MenuLogo = ({ logo: { url, image, imageInverted, title }, LinkTemplate }) => (
    <LinkTemplate url={url} className="menu__logo-container">
        <img
            className="menu__logo"
            src={image}
            alt={title} />
        <img
            className="menu__logo--inverted"
            src={imageInverted}
            alt={title} />
    </LinkTemplate>
);

MenuContent.propTypes = {
    menuLink: PropTypes.shape({
        links: PropTypes.array,
        heading: PropTypes.shape({
            text: PropTypes.string
        })
    }),
    logo: PropTypes.shape({
        url: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string
    }),
    openedSubmenuIndex: PropTypes.number,
    onToggleSubmenu: PropTypes.func
}

export default MenuContent;