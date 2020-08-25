import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

export default function FunkyTab({
  element,
  isSelected,
  index,
  uniqueId,
  onSelect,
  noImages
}: any) {
  const linkRef = useRef();

  useEffect(() => {
    if (linkRef.current && isSelected) {
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      linkRef.current.focus();
    }
  }, [isSelected]);

  function renderImage(src: any, noImages: any) {
    if (noImages) {
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
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'HTMLAn... Remove this comment to see the full error message
        ref={linkRef}
        role="tab"
        aria-controls={`${uniqueId}-panel-${index}`}
        aria-selected={isSelected}
        tabIndex={isSelected ? 0 : -1}
        className="funky-tabs__link"
        href={element.props.url}
        onClick={e => onSelect(e, index, element.props.url, element.props.heading)}
      >
        {renderImage(element.props.imagePath, noImages)}
        <div className="funky-tabs__tab-text">
          <span className="link">{element.props.heading}</span>
        </div>
      </a>
    </li>
  );
}
