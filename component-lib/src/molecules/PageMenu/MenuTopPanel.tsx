import React from 'react';

import SvgIcon from '../../atoms/SvgIcon';
import TextBoxWithIcon from '../../molecules/TextBoxWithIcon';

const ESCAPE_KEY = 27;

type State = any;

export default class MenuTopPanel extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      showSearchBar: false,
    };
  }
  maybeHideSearchBar(e: any) {
    if (e.keyCode === ESCAPE_KEY) {
      this.setState({ showSearchBar: false });
    }
  }
  showSearchBar() {
    this.setState({ showSearchBar: true });
  }
  renderSearch() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'searchUrl' does not exist on type 'Reado... Remove this comment to see the full error message
    if (!this.props.searchUrl) return null;

    if (this.state.showSearchBar) {
      return (
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'searchUrl' does not exist on type 'Reado... Remove this comment to see the full error message
        <form action={this.props.searchUrl} method="get" className="page-menu__search-bar">
          <TextBoxWithIcon
            // @ts-expect-error ts-migrate(2322) FIXME: Property 'name' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
            name="q"
            type="search"
            autoFocus
            onKeyUp={(e: any) => this.maybeHideSearchBar(e)}
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
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'href' does not exist on type 'DetailedHT... Remove this comment to see the full error message
        href={this.props.searchUrl}
      >
        <SvgIcon className="page-menu__icon-box-icon page-menu__icon-search" iconName="ico_search" color="black" />
        <span className="page-menu__icon-box-text">Søk</span>
      </button>
    );
  }
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isExpanded' does not exist on type 'Read... Remove this comment to see the full error message
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
