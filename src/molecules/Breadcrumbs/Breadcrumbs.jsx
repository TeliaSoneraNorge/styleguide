import React, { useState } from 'react';
import { ArrowRightIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';

const crumbType = {
  LINK: 'link',
  LEFT: 'left',
  RIGHT: 'right',
  LABEL: 'label',
};

const arrowRight = {
  ARROW: 'arrow',
  NONE: 'none',
};

const Breadcrumbs = (props) => {
  if (!props.crumbs) {
    return <></>;
  }

  if (props.crumbs.length === 0) {
    return <></>;
  }

  const alwaysShowRootCrumb = props.alwaysShowRootCrumb ?? true;
  const maxCrumbIndex = props.crumbs.length - 1;
  const [maxIndex, setMaxIndex] = useState(maxCrumbIndex);
  const showLeftPagingTreshold = alwaysShowRootCrumb ? 1 : 0;

  let pagingSize = props.pagingSize ?? 1;
  let pageSize = props.pageSize ?? 3;
  if (pagingSize <= 0) {
    pagingSize = 1;
  }
  if (pageSize <= 0) {
    pageSize = 1;
  }
  if (alwaysShowRootCrumb && pageSize < 2) {
    console.warn('Telia-Breadcrumbs: show root crumb is true, so page size cannot be below 2');
    pageSize = 2;
  }
  const minIndex = maxIndex - pageSize + 1 + (alwaysShowRootCrumb ? 1 : 0);

  const crumbs = props.crumbs.map((crumb, i) => {
    return {
      key: i,
      name: crumb.name,
      link: crumb.link,
      title: crumb.title,
      target: crumb.target,
      type: crumbType.LINK,
      arrowRight: arrowRight.NONE,
    };
  });

  const getStyle = (style, color) => {
    if (color) {
      return (style += ' ' + style + '--' + color);
    }
    return style;
  };

  const rangeVisibleCrumbs = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };
  var result = rangeVisibleCrumbs(minIndex, maxIndex - 1);

  const getVisibleCrumbs = () => {
    return crumbs.filter((c) => {
      let i = c.key;
      return i >= minIndex && i <= maxIndex;
    });
  };

  const addPagingCrumbs = (visibleCrumbs) => {
    const addPagingCrumb = (index, crumb, type) => {
      crumb.type = type;
      visibleCrumbs.splice(index, 0, crumb);
    };

    if (minIndex > showLeftPagingTreshold && maxCrumbIndex >= pageSize) {
      addPagingCrumb(0, crumbs[minIndex - 1], crumbType.LEFT);
    }

    if (maxIndex < maxCrumbIndex && maxCrumbIndex >= pageSize) {
      addPagingCrumb(visibleCrumbs.length, crumbs[maxIndex + 1], crumbType.RIGHT);
    }

    return visibleCrumbs;
  };

  const addRootCrumb = (visibleCrumbs) => {
    if (minIndex > 0 && alwaysShowRootCrumb) {
      visibleCrumbs.splice(0, 0, crumbs[0]);
    }
    return visibleCrumbs;
  };

  const addArrowRight = (visibleCrumbs) => {
    visibleCrumbs.forEach((element) => {
      if (result.includes(element.key)) {
        element.arrowRight = arrowRight.ARROW;
      }
    });

    if (minIndex === 1) {
      visibleCrumbs[0].arrowRight = 'arrow';
    }

    return visibleCrumbs;
  };

  const setLabelCrumb = (displayCrumbs) => {
    let lastCrumb = displayCrumbs[displayCrumbs.length - 1];
    if (lastCrumb.type === crumbType.LINK) {
      lastCrumb.type = crumbType.LABEL;
    }
  };

  const onPagingLeft = () => {
    setMaxIndex(Math.max(maxIndex - pagingSize, pageSize - 1));
  };

  const onPagingRight = () => {
    setMaxIndex(Math.min(maxIndex + pagingSize, maxCrumbIndex));
  };

  const CrumbLabel = ({ crumb }) => {
    return (
      <span className={getStyle('telia-breadcrumbs__crumb-label', props.fontColor)}>
        <b>{crumb.name}</b>
      </span>
    );
  };

  const CrumbPaging = ({ onPagingEvent }) => {
    return (
      <>
        <button type="button" className={'telia-breadcrumbs__paging-button'} onClick={onPagingEvent}>
          <MoreIcon
            className={getStyle('telia-breadcrumbs__more-icon telia-breadcrumbs__more-icon svg', props.iconColor)}
          />
        </button>
      </>
    );
  };

  const CrumbLink = ({ crumb }) => {
    return (
      <>
        <a
          className={getStyle('telia-breadcrumbs__link', props.fontColor)}
          href={crumb.link}
          target={crumb.target ?? ''}
          title={crumb.title ?? ''}
        >
          {crumb.name}
        </a>
        {crumb.arrowRight === 'arrow' && (
          <ArrowRightIcon className={getStyle('telia-breadcrumbs__arrow-right-icon', props.iconColor)} />
        )}
      </>
    );
  };

  const CrumbRender = ({ crumb }) => {
    return (
      <li key={crumb.key} className={'telia-breadcrumbs__crumb'}>
        {crumb.type === crumbType.LEFT && <CrumbPaging onPagingEvent={onPagingLeft} />}

        {crumb.type === crumbType.LABEL && <CrumbLabel crumb={crumb} />}

        {crumb.type === crumbType.RIGHT && <CrumbPaging onPagingEvent={onPagingRight} />}

        {crumb.type === crumbType.LINK && <CrumbLink crumb={crumb} />}
      </li>
    );
  };

  let displayCrumbs = getVisibleCrumbs();
  displayCrumbs = addPagingCrumbs(displayCrumbs);
  displayCrumbs = addRootCrumb(displayCrumbs);
  displayCrumbs = addArrowRight(displayCrumbs);
  setLabelCrumb(displayCrumbs);

  return (
    <div className={getStyle('telia-breadcrumbs', props.backgroundColor)}>
      <ul className={'telia-breadcrumbs__list'}>
        {displayCrumbs.map((crumb) => (
          <CrumbRender crumb={crumb} key={crumb.key} />
        ))}
      </ul>
    </div>
  );
};

Breadcrumbs.defaultProps = {
  crumbs: [],
};

export default Breadcrumbs;
