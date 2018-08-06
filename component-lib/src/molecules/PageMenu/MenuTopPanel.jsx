import React from 'react';

const MenuTopPanel = ({ isExpanded, onClose, menuId }) => (
    <div className="page-menu__top-panel">
        <button
            aria-label="Lukk"
            className="page-menu__close-button page-menu__icon-box"
            onClick={onClose}
            aria-expanded={isExpanded}
            aria-controls={menuId || 'page-header-menu'}>
            <i className="page-menu__icon-box-icon page-menu__icon-delete">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                    <path fill-rule="evenodd" d="M13.773 10.502l6.546 6.546c.907.907.912 2.366.005 3.273a2.318 2.318 0 0 1-3.278 0L10.5 13.775l-6.546 6.546a2.318 2.318 0 0 1-3.278 0 2.313 2.313 0 0 1 .005-3.273l6.546-6.546L.68 3.956A2.309 2.309 0 0 1 .676.682a2.314 2.314 0 0 1 3.278 0L10.5 7.23 17.046.682A2.309 2.309 0 0 1 20.32.678a2.318 2.318 0 0 1 0 3.278l-6.546 6.546z"/>
                </svg>
            </i>
            <span className="page-menu__icon-box-text">Lukk</span>
        </button>
        <button
            aria-label="Søk"
            className="page-menu__search-button page-menu__icon-box"
            onClick={onClose}>
            <i className="page-menu__icon-box-icon page-menu__icon-search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                    <path fill-rule="evenodd" d="M16.536 16.51a1.541 1.541 0 0 1-2.18 0l-2.369-2.368a7.692 7.692 0 0 1-4.253 1.276 7.698 7.698 0 0 1-5.453-2.257 7.713 7.713 0 0 1 10.91-10.904 7.715 7.715 0 0 1 .977 9.704l2.368 2.368a1.541 1.541 0 0 1 0 2.181zm-8.8-14.583a5.749 5.749 0 0 0-4.088 1.694 5.791 5.791 0 0 0 0 8.176 5.749 5.749 0 0 0 4.089 1.694 5.749 5.749 0 0 0 4.09-1.694 5.786 5.786 0 0 0 0-8.176 5.753 5.753 0 0 0-4.09-1.694z"/>
                </svg>
            </i>
            <span className="page-menu__icon-box-text">Søk</span>
        </button>
    </div>
);

export default MenuTopPanel;