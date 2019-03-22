import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export default class MenuSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            searchFocus: false,
            searchQuery: ''
        }

        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSearchInputRef = this.onSearchInputRef.bind(this);
        this.onContainerClick = this.onContainerClick.bind(this);
    }

    onInputFocus() {
        this.setState({ searchFocus: true });
    }

    onInputBlur() {
        this.setState({ searchFocus: false, searchQuery: '' });
    }
    onSearchQueryChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    onSearchInputRef(searchInput) {
        this.searchInput = searchInput
    }

    onContainerClick() {
        this.searchInput.focus();
    }

    render() {
        const { searchFocus, searchQuery } = this.state;

        return (
            <div
                tabIndex={0}
                className={classnames('menu__search', { 'menu__search--focused': searchFocus })}
                onClick={this.onContainerClick}
            >
                <input className="menu__search-input"
                    type="text"
                    placeholder="Søk"
                    value={searchQuery}
                    onFocus={this.onInputFocus}
                    onBlur={this.onInputBlur}
                    onChange={this.onSearchQueryChange}
                    ref={this.onSearchInputRef}
                />
                <SvgIcon className="menu__search-icon" iconName="ico_search-menu" color="black" />
                <span className="menu__search-label">Søk</span>
                <button
                    className={classnames('menu__search-close', {'menu__search-close--focused': searchFocus })}
                    onClick={this.onInputBlur}
                >
                    <span className="menu__search-close-line"></span>
                    <span className="menu__search-close-line"></span>
                </button>
            </div>
        )
    }
}