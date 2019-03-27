import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import MenuSearch from './MenuSearch';

const MenuLogo = ({ logo: { url, image, title }, LinkTemplate }) => (
    // TODO: Add tabbing (inverse) image
    <LinkTemplate url={url}>
        <img
            className="menu__logo"
            src={image}
            alt={title} />
    </LinkTemplate>
);

const MenuHeading = ({ menuLinks, activeIndex, LinkTemplate }) => (
    <ul className="menu__heading">
        {menuLinks.map((menuLink, index) => (
            <li key={index}>
                <LinkTemplate
                    url={menuLink.heading.url}
                    className={classnames(
                        'menu__heading-item link',
                        { 'menu__heading-item--active': activeIndex === index })}>
                    {menuLink.heading.text}
                </LinkTemplate>
            </li>
        ))}
    </ul>
);

const LoginButton = ({ loginUrl }) => (
    <a href={loginUrl} className="menu__login-button button button--small">
        <SvgIcon className="menu__login-button-icon" iconName="ico_login" color="none" />
        logg inn
    </a>
);

const MobileMenuButton = ({ onMenuToggle }) => (
    <button className="menu__mobile-button" onClick={onMenuToggle}>
        <SvgIcon className="menu__mobile-button-icon" iconName="ico_menu_mobile" color="black" />
        <span className="menu__mobile-button-text">Meny</span>
    </button>
)

const MenuTop = ({ LinkTemplate, logo, activeIndex, menuLinks, loginUrl, onMobileMenuToggle, onSearchSubmit }) => (
    <div className="menu__top">
        <MenuLogo LinkTemplate={LinkTemplate} logo={logo} />
        <MenuHeading LinkTemplate={LinkTemplate} activeIndex={activeIndex} menuLinks={menuLinks} />
        {onSearchSubmit && <MenuSearch onSubmit={onSearchSubmit} />}
        {loginUrl && <LoginButton loginUrl={loginUrl} />}
        <MobileMenuButton onMenuToggle={onMobileMenuToggle} />
    </div>
);

MenuTop.propTypes = {
    menuLinks: PropTypes.array,
    logo: PropTypes.shape({
        url: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string
    }),
    activeIndex: PropTypes.number,
    onSearchSubmit: PropTypes.func,
    LinkTemplate: PropTypes.func
};

MenuTop.defaultProps = {
    menuLinks: [],
    logo: {},
    activeIndex: 0
}

export default MenuTop;