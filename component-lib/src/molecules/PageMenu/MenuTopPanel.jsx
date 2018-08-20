import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const MenuTopPanel = ({ isExpanded, onClose, menuId, searchUrl }) => (
    <div className="page-menu__top-panel">
        <button
            aria-label="Lukk"
            className="page-menu__close-button page-menu__icon-box"
            onClick={onClose}
            aria-expanded={isExpanded}
            aria-controls={menuId || 'page-header-menu'}>
            <SvgIcon className="page-menu__icon-box-icon page-menu__icon-delete" iconName="ico_delete" color="black" />
            <span className="page-menu__icon-box-text">Lukk</span>
        </button>
        {searchUrl ? <a
            aria-label="Søk"
            className="page-menu__search-button page-menu__icon-box"
            onClick={onClose}
            href={searchUrl}>
            <SvgIcon className="page-menu__icon-box-icon page-menu__icon-search" iconName="ico_search" color="black" />
            <span className="page-menu__icon-box-text">Søk</span>
        </a> : null}
    </div>
);

export default MenuTopPanel;