import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextBoxWithLabel from '../../molecules/TextBoxWithLabel';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import FocusTrap from './FocusTrap';

const KEY_ESC = 27;

export default function MenuSearch({
    onSubmit,
    searchLabel,
    searchButtonLabel,
    searchButtonAbortText,
}) {
    const [focused, setFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const searchBoxRef = useRef();
    const openSearchButton = useRef();

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = (event) => {
        if (event.keyCode === KEY_ESC && focused)
            closeSeachBox();
    };

    const closeSeachBox = () => {
        setFocused(false);

        if (openSearchButton.current)
            openSearchButton.current.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e, searchQuery);
        setLoading(true);
    };

    const renderSearchField = (Component, additionalProps = {}) => (
        <Component
            className="menu__search--open"
            ref={searchBoxRef}
            {...additionalProps}>
            <form onSubmit={handleSubmit} className="menu__search--open-form">
                <TextBoxWithLabel
                    type="search"
                    autoFocus
                    withIcon={true}
                    iconName="ico_search"
                    iconLabel={searchButtonLabel}
                    disabled={loading}
                    iconIsButton
                    onIconClick={onSubmit}
                    searchIsLoading={loading}
                    small
                    hideLabel={true}
                    labelText={searchLabel}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
            <button className="menu__search--open-abort-button button button--small"
                onClick={() => closeSeachBox()}
                aria-label={searchButtonAbortText ? searchButtonAbortText : 'Lukk'} >
                {searchButtonAbortText ? searchButtonAbortText : 'Lukk'}
            </button>
        </Component>
    );

    return (
        <div className={classnames('menu__search', { 'menu__search--focused': focused })} >
            <button
                ref={openSearchButton}
                className="menu__search button--stripped"
                onClick={() => setFocused(true)}
                aria-label={searchButtonLabel ? searchButtonLabel : 'Søk'} >

                <SvgIcon className="menu__search--icon" iconName="ico_search-menu" color="none" />
                <div className="menu__search--label" aria-label={searchButtonLabel ? searchButtonLabel : 'Søk'}>
                    {searchButtonLabel ? searchButtonLabel : 'Søk'}
                </div>
            </button>

            {focused &&
                renderSearchField(FocusTrap, { as: 'div' })
            }
        </div>
    );
}

MenuSearch.propTypes = {
    onSubmit: PropTypes.func,
    searchLabel: PropTypes.string,
    searchButtonLabel: PropTypes.string,
    searchButtonAbortText: PropTypes.string,
};