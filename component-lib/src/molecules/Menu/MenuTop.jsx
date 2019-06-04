import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const MenuHeading = ({ menuLinks, activeIndex, LinkTemplate, onItemSelected }) => (
    <ul className="menu__top--heading">
        {menuLinks.map((menuLink, index) => (
            <li key={menuLink.heading && menuLink.heading.text}>
                <LinkTemplate
                    onClick={() => onItemSelected(index)}
                    url={menuLink.heading.url}
                    className={classnames(
                        'menu__top--heading-item link',
                        { 'menu__top--heading-item--active': activeIndex === index })}>
                    <span className="link__content">{menuLink.heading.text}</span>
                </LinkTemplate>
            </li>
        ))}
    </ul>
);


const MenuTop = ({ LinkTemplate, activeIndex, menuLinks, onMenuHeaderItemSelected }) => (
    <div className="menu__top">
        <MenuHeading
            LinkTemplate={LinkTemplate}
            activeIndex={activeIndex}
            menuLinks={menuLinks}
            onItemSelected={onMenuHeaderItemSelected} />
    </div>
);

MenuTop.propTypes = {
    menuLinks: PropTypes.array,
    activeIndex: PropTypes.number,
    LinkTemplate: PropTypes.func,
    onMenuHeaderItemSelected: PropTypes.func
};

MenuTop.defaultProps = {
    menuLinks: [],
    activeIndex: 0
};

export default MenuTop;