import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

export default function FunkyTab({ element, isSelected, index, uniqueId, onSelect }) {
  const linkRef = useRef();

  useEffect(() => {
    if (linkRef.current && isSelected) {
      linkRef.current.focus();
    }
  }, [isSelected]);

  function renderImage(src) {
    if (!src) {
      return <div className="funky-tabs__tab-no-image" />;
    }

    return <img className="funky-tabs__tab-image" src={src} />;
  }

  return (
    <li
      key={element.props.heading}
      className={classNames('funky-tabs__tab', {
        'funky-tabs__tab--selected': isSelected,
      })}
      id={`${uniqueId}-tab-${index}`}
      role="presentation"
    >
      <a
        ref={linkRef}
        role="tab"
        aria-controls={`${uniqueId}-panel-${index}`}
        aria-selected={isSelected}
        tabIndex={isSelected ? 0 : -1}
        className="funky-tabs__link"
        href={element.props.url}
        onClick={e => onSelect(e, index, element.props.url, element.props.heading)}
      >
        {renderImage(element.props.imagePath)}
        <div className="funky-tabs__tab-text">
          <span className="link">{element.props.heading}</span>
        </div>
      </a>
    </li>
  );
}
