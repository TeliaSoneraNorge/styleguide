import React from 'react';
import classnames from 'classnames';

const MenuHeading = ({
  menuLinks,
  activeIndex,
  LinkTemplate
}: any) => (
  <ul className="menu__top--heading">
    {menuLinks.map((menuLink: any, index: any) => (
      <li key={menuLink.heading && menuLink.heading.text}>
        <LinkTemplate
          url={menuLink.heading.url}
          className={classnames('menu__top--heading-item link', {
            'menu__top--heading-item--active': activeIndex === index,
          })}
        >
          <span className="link__content">{menuLink.heading.text}</span>
        </LinkTemplate>
      </li>
    ))}
  </ul>
);

type OwnMenuTopProps = {
    menuLinks?: any[];
    activeIndex?: number;
    LinkTemplate?: (...args: any[]) => any;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'MenuTopProps' circularly references it... Remove this comment to see the full error message
type MenuTopProps = OwnMenuTopProps & typeof MenuTop.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'MenuTop' implicitly has type 'any' because it doe... Remove this comment to see the full error message
const MenuTop = ({ LinkTemplate, activeIndex, menuLinks }: MenuTopProps) => (
  <div className="menu__top">
    <MenuHeading LinkTemplate={LinkTemplate} activeIndex={activeIndex} menuLinks={menuLinks} />
  </div>
);

MenuTop.defaultProps = {
  menuLinks: [],
  activeIndex: 0,
};

export default MenuTop;
