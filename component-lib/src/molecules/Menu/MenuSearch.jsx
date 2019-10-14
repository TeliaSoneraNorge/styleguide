import React from 'react';
import classnames from 'classnames';
import TextBoxWithLabel from '../../molecules/TextBoxWithLabel';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export default class MenuSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFocus: false,
            searchQuery: ''
        };

        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onContainerClick = this.onContainerClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClickaway = this.onClickaway.bind(this);
        this.onGlobalKeyDown = this.onGlobalKeyDown.bind(this);
        this.onContainerRef = this.onContainerRef.bind(this);
        this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        document.addEventListener('keydown', this.onGlobalKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickaway);
        document.removeEventListener('keydown', this.onGlobalKeyDown);
    }

    onClickaway(event) {

        if (this.container && !this.isDescendant(this.container, event.target)) {
            this.setState({ searchFocus: false });
        }
    }

    onGlobalKeyDown(e) {
        const key = e.which || e.keyCode;

        if (key === 27 && this.state.searchFocus) { // escape key
            this.setState({ searchFocus: false });
        }
    }

    onSearchQueryChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    onContainerRef(container) {
        this.container = container;
    }

    onContainerClick(e) {
        e.stopPropagation();
        setTimeout(() => {
            this.setState({ searchFocus: true });
        },1);
    }

    onKeyDown(e) {
        const key = e.which || e.keyCode;
        if (key === 13) { // enter
            this.onContainerClick(e);
        }
    }

    onCloseButtonClick(e) {
        e.stopPropagation();

        this.setState({ searchFocus: false, searchQuery: '' });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e, this.state.searchQuery);
        this.setState({ searchFocus: false, searchQuery: '' });
    }

    renderSearchField() {
        return (
            <form onSubmit={this.onSubmit} className="menu__search--open-form">
                <TextBoxWithLabel
                    type="search"
                    autoFocus
                    withIcon="true"
                    iconName="ico_search"
                    iconLabel="Search"
                    iconIsButton
                    small
                    buttonTitle="Søk knapp"
                    onChange={(e) => this.onSearchQueryChange(e)} />
            </form>
        );
    }

    render() {
        const { searchFocus } = this.state;

        return (
            <div tabIndex="0"
                ref={this.onContainerRef}
                className={classnames('menu__search', { 'menu__search--focused': searchFocus })}
                onClick={this.onContainerClick}
                onKeyDown={this.onKeyDown} >

                <SvgIcon className="menu__search--icon" iconName="ico_search-menu" color="none" />
                <div className="menu__search--label">Søk</div>


                {searchFocus &&
                    <div className="menu__search--open">
                        {this.renderSearchField()}
                        <span tabIndex="0" className="menu__search--open-abort-button"
                            onKeyDown={(e) => this.onCloseButtonClick(e)}
                            onClick={(e) => this.onCloseButtonClick(e)}>
                            Avbryt
                        </span>
                    </div>
                }
            </div>
        );
    }
}