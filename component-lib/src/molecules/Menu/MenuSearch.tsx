import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import TextBoxWithLabel from '../../molecules/TextBoxWithLabel';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import FocusTrap from '../../atoms/FocusTrap/FocusTrap';

const KEY_ESC = 27;

type Props = {
    onSubmit?: (...args: any[]) => any;
    searchLabel?: string;
    searchButtonLabel?: string;
    searchButtonAbortText?: string;
};

export default function MenuSearch({ onSubmit, searchLabel, searchButtonLabel, searchButtonAbortText }: Props) {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const searchBoxRef = useRef();
  const openSearchButton = useRef();

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = (event: any) => {
    if (event.keyCode === KEY_ESC && focused) closeSeachBox();
  };

  const closeSeachBox = () => {
    setFocused(false);

    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    if (openSearchButton.current) openSearchButton.current.focus();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e, searchQuery);
    setLoading(true);
  };

  const renderSearchField = (Component: any, additionalProps = {}) => (
    <Component className="menu__search--open" ref={searchBoxRef} {...additionalProps}>
      <form onSubmit={handleSubmit} className="menu__search--open-form">
        <TextBoxWithLabel
          // @ts-expect-error ts-migrate(2322) FIXME: Property 'type' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
          type="search"
          autoFocus
          withIcon={true}
          iconName="ico_search"
          iconLabel={searchButtonLabel}
          disabled={loading}
          iconIsButton
          onIconClick={onSubmit}
          displayLoader={loading}
          small
          hideLabel={true}
          labelText={searchLabel}
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e.target.value)}
        />
      </form>
      <button
        className="menu__search--open-abort-button button button--small"
        onClick={() => closeSeachBox()}
        aria-label={searchButtonAbortText ? searchButtonAbortText : 'Lukk'}
      >
        {searchButtonAbortText ? searchButtonAbortText : 'Lukk'}
      </button>
    </Component>
  );

  return (
    <div className={classnames('menu__search', { 'menu__search--focused': focused })}>
      <button
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'HTMLBu... Remove this comment to see the full error message
        ref={openSearchButton}
        className="menu__search button--stripped"
        onClick={() => setFocused(true)}
        aria-label={searchButtonLabel ? searchButtonLabel : 'Søk'}
      >
        <SvgIcon className="menu__search--icon" iconName="ico_search-menu" color="none" />
        <div className="menu__search--label" aria-label={searchButtonLabel ? searchButtonLabel : 'Søk'}>
          {searchButtonLabel ? searchButtonLabel : 'Søk'}
        </div>
      </button>

      {focused && renderSearchField(FocusTrap, { as: 'div' })}
    </div>
  );
}
