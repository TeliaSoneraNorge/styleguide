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

const ItemWithSubmenu = ({ onToggleSubmenu, isOpen, text, subLinks, LinkTemplate, isActive, linkIndex, onItemSelected }) => (
    <div tabIndex="0" className={classnames(
        "menu__item link menu__submenu",
        { 'menu__submenu--active': isActive })}
        onKeyPress={(e) => onSubmenuKeyPress(e, onToggleSubmenu)}>
        <span className="menu__submenu-link" onClick={onToggleSubmenu}>
            {text}
            <SvgIcon
                iconName="ico_dropArrow"
                color="purple"
                className={classnames(
                    'icon-link__icon menu__submenu-icon',
                    { 'menu__submenu-icon--open': isOpen })} />
        </span>
        <div className={classnames('menu__submenu-container', { 'menu__submenu-container--open': isOpen })}>
            {subLinks.map((sublink, index) =>
                <LinkTemplate
                    key={sublink.text}
                    className="menu__subitem link"
                    url={sublink.url}
                    onClick={() => onItemSelected(linkIndex)}>
                    <span className="link__content">{sublink.text}</span>
                </LinkTemplate>
            )}
        </div>
    </div>
);

const MenuLinkItem = ({ link, LinkTemplate, onToggleSubmenu, isSubmenuOpen, isActive, index, onItemSelected }) => (
    <li>
        {link.url &&
            <LinkTemplate
                className={classnames(
                    'menu__item link',
                    { 'menu__item--active': isActive })}
                url={link.url}
                onClick={() => onItemSelected(index)}>
                <span className="link__content">{link.text}</span>
            </LinkTemplate>
        }
        {!link.url && link.subLinks &&
            <ItemWithSubmenu
                text={link.text}
                subLinks={link.subLinks}
                onToggleSubmenu={onToggleSubmenu}
                isOpen={isSubmenuOpen}
                isActive={isActive}
                LinkTemplate={LinkTemplate}
                linkIndex={index}
                onItemSelected={onItemSelected} />}
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
);

const MenuContent = ({
    menuLink,
    openedSubmenuIndex,
    activeIndex,
    onToggleSubmenu,
    logo,
    LinkTemplate,
    onMobileMenuToggle,
    onSearchSubmit,
    onMenuContentItemSelected,
    setDefaultActiveLinkIndex,
    isLoggedIn,
    loginUrl,
    myPageUrl }) => (
        <div className="menu__content">
            <MenuLogo LinkTemplate={LinkTemplate} logo={logo} setDefaultActiveLinkIndex={setDefaultActiveLinkIndex} />
            <ul id={`${menuLink && menuLink.heading && menuLink.heading.text}-panel`} className="menu__content-panel">
                {menuLink && menuLink.links.map((link, index) => (
                    <MenuLinkItem
                        LinkTemplate={LinkTemplate}
                        isSubmenuOpen={openedSubmenuIndex === index}
                        isActive={activeIndex === index}
                        onToggleSubmenu={(event) => onToggleSubmenu(index, event)}
                        key={link.text}
                        link={link}
                        index={index}
                        onItemSelected={onMenuContentItemSelected} />))}
            </ul>
            <div className="menu__content-right">
                {onSearchSubmit &&
                    <MenuSearch onSubmit={onSearchSubmit} />
                }
                {loginUrl && !isLoggedIn &&
                    <LoginButton loginUrl={loginUrl} />
                }
                {myPageUrl && isLoggedIn &&
                    <MyPageButton myPageUrl={myPageUrl} />
                }
                <MobileMenuButton onMenuToggle={onMobileMenuToggle} />
            </div>
        </div>
    );

const MenuLogo = ({ logo: { url, image, imageInverted, title }, LinkTemplate, setDefaultActiveLinkIndex }) => (
    <LinkTemplate url={url} className="menu__logo-container" onClick={() => setDefaultActiveLinkIndex()}>
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
};

export default MenuContent;