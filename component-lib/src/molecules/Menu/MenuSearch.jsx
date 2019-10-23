import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextBoxWithLabel from '../../molecules/TextBoxWithLabel';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export default class MenuSearch extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        searchLabel: PropTypes.string,
        searchButtonTitle: PropTypes.string,
        searchButtonAbort: PropTypes.string,
    };

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

    componentDidMount() {
        document.addEventListener('click', this.onClickaway);
        document.addEventListener('keydown', this.onGlobalKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickaway);
        document.removeEventListener('keydown', this.onGlobalKeyDown);
    }

    onClickaway(event) {
        if (event.target.className !== 'textbox textbox--small') {
            this.setState({ searchFocus: false });
        }
    }

    onGlobalKeyDown(e) {
        const key = e.which || e.keyCode;

        if (key === 27 && this.state.searchFocus) { // escape key
            this.setState({ searchFocus: false });

            this.container.focus();
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

        this.setState({ searchFocus: false });
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
                    withIcon={true}
                    iconName="ico_search"
                    iconLabel="Search"
                    iconIsButton
                    iconTitle={this.props.searchButtonTitle}
                    small
                    hideLabel={true}
                    labelText={this.props.searchLabel}
                    searchQueryValue={this.state.searchQuery}
                    onChange={(e) => this.onSearchQueryChange(e)} />
            </form>
        );
    }

    render() {
        const { searchFocus } = this.state;

        return (
            <div className={classnames('menu__search',{ 'menu__search--focused': searchFocus })} >
                <button
                    ref={this.onContainerRef}
                    className="menu__search button--stripped"
                    onClick={this.onContainerClick}
                    onKeyDown={this.onKeyDown}
                    title={this.props.searchButtonTitle} >

                    <SvgIcon className="menu__search--icon" iconName="ico_search-menu" color="none" />
                    <div className="menu__search--label">Søk</div>
                </button>
                {searchFocus &&
                    <div className="menu__search--open">
                        {this.renderSearchField()}
                        <button className="menu__search--open-abort-button button--stripped"
                            onKeyDown={(e) => this.onCloseButtonClick(e)}
                            onClick={(e) => this.onCloseButtonClick(e)}
                            title={this.props.searchButtonAbort ? this.props.searchButtonAbort : 'Trykk for å avbryte'} >
                            Avbryt
                        </button>
                    </div>
                }
            </div>          
        );
    }
}