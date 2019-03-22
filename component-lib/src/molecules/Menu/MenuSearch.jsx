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

        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSearchInputRef = this.onSearchInputRef.bind(this);
        this.onContainerClick = this.onContainerClick.bind(this);
        this.onClickaway = this.onClickaway.bind(this);
        this.onContainerRef = this.onContainerRef.bind(this);
        this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
    }

    isDescendant(parent, child) {
        while (child) {
            if (child === parent) {
                return true;
            }
            child = child.parentNode;
        }
        return false;
    }

    componentDidMount() {
        document.addEventListener('click', this.onClickaway);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickaway);
    }

    onClickaway(event) {
        if (this.container && !this.isDescendant(this.container, event.target)) {
            this.setState({ searchFocus: false });
        }
    }

    onSearchQueryChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    onSearchInputRef(searchInput) {
        this.searchInput = searchInput
    }

    onContainerRef(container) {
        this.container = container
    }

    onContainerClick(e) {
        e.stopPropagation();

        this.setState({ searchFocus: true });
        setTimeout(() => this.searchInput.focus(), 0);
    }

    onCloseButtonClick(e) {
        e.stopPropagation();

        this.setState({ searchFocus: false, searchQuery: '' });
    }

    render() {
        const { searchFocus, searchQuery } = this.state;

        return (
            <div
                ref={this.onContainerRef}
                className={classnames('menu__search', { 'menu__search--focused': searchFocus })}
                onClick={this.onContainerClick}
            >
                <input className="menu__search-input"
                    type="text"
                    placeholder="Søk"
                    value={searchQuery}
                    onChange={this.onSearchQueryChange}
                    ref={this.onSearchInputRef}
                />
                <SvgIcon className="menu__search-icon" iconName="ico_search-menu" color="black" />
                <span className="menu__search-label">Søk</span>
                <button
                    className={classnames('menu__search-close', { 'menu__search-close--focused': searchFocus })}
                    onClick={this.onCloseButtonClick}
                >
                    <span className="menu__search-close-line"></span>
                    <span className="menu__search-close-line"></span>
                </button>
            </div>
        )
    }
}