import React from 'react';

import SvgIcon from '../../atoms/SvgIcon';
import TextBoxWithIcon from '../../molecules/TextBoxWithIcon';

const ESCAPE_KEY = 27;

export default class MenuTopPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchBar: false,
    };
  }
  maybeHideSearchBar(e) {
    if (e.keyCode === ESCAPE_KEY) {
      this.setState({ showSearchBar: false });
    }
  }
  showSearchBar() {
    this.setState({ showSearchBar: true });
  }
  renderSearch() {
    if (!this.props.searchUrl) return null;

    if (this.state.showSearchBar) {
      return (
        <form action={this.props.searchUrl} method="get" className="page-menu__search-bar">
          <TextBoxWithIcon
            name="q"
            type="search"
            autoFocus
            onKeyUp={e => this.maybeHideSearchBar(e)}
            iconName="ico_search"
            iconLabel="Search"
            iconIsButton
          />
        </form>
      );
    }

    return (
      <button
        aria-label="Søk"
        className="page-menu__search-button page-menu__icon-box"
        onClick={() => this.showSearchBar()}
        href={this.props.searchUrl}
      >
        <SvgIcon className="page-menu__icon-box-icon page-menu__icon-search" iconName="ico_search" color="black" />
        <span className="page-menu__icon-box-text">Søk</span>
      </button>
    );
  }
  render() {
    const { isExpanded, onClickClose, menuId } = this.props;

    return (
      <div className="page-menu__top-panel">
        <button
          aria-label="Lukk"
          className="page-menu__close-button page-menu__icon-box"
          onClick={onClickClose}
          aria-expanded={isExpanded}
          aria-controls={menuId || 'page-header-menu'}
        >
          <SvgIcon className="page-menu__icon-box-icon page-menu__icon-delete" iconName="ico_delete" color="black" />
          <span className="page-menu__icon-box-text">Lukk</span>
        </button>
        {this.renderSearch()}
      </div>
    );
  }
}
