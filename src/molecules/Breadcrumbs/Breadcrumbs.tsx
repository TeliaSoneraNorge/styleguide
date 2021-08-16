import React, { useState } from 'react';
import { ArrowRightIcon } from '../../atoms/Icon/icons';
import { MoreLowIcon } from '../../atoms/Icon/icons';

export interface Crumb {
  name: string;
  link: string;
  target?: string;
  title?: string;
  type?: string;
  arrowRight?: string;
}

interface CrumbInternal extends Crumb {
  key: number;
}

export type BreadcrumbsProps = {
  crumbs?: Crumb[];
  alwaysShowRootCrumb?: boolean;
  pageSize?: number;
  pagingSize?: number;
  backgroundColor?: string;
  fontColor?: string;
  iconColor?: string;
};

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

const Breadcrumbs = (props: {
  crumbs: Crumb[];
  alwaysShowRootCrumb: boolean;
  pagingSize: number;
  pageSize: number;
  fontColor: string;
  iconColor: string;
  backgroundColor: string;
}) => {
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
  const fontColor = props.fontColor;
  const iconColor = props.iconColor;

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

  const crumbs: CrumbInternal[] = props.crumbs.map((crumb, i) => {
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

  const getStyle = (style: string, color: string) => {
    if (!color) {
      color = 'black';
    }
    return style + ' ' + style + '--' + color;
  };

  const setBackgroundColor = (style: string, color: string) => {
    if (color) {
      return style + ' ' + style + '--' + color;
    }
    return style;
  };

  const getRangeVisibleCrumbs = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(null)
      .map((_, idx) => start + idx);
  };

  const rangeVisibleCrumbs = getRangeVisibleCrumbs(minIndex, maxIndex - 1);

  const getVisibleCrumbs = () => {
    return crumbs.filter((c) => {
      const i = c.key;
      return i >= minIndex && i <= maxIndex;
    });
  };

  const addPagingCrumbs = (visibleCrumbs: CrumbInternal[]) => {
    const addPagingCrumb = (index: number, crumb: CrumbInternal, type: string) => {
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

  const addRootCrumb = (visibleCrumbs: CrumbInternal[]) => {
    if (minIndex > 0 && alwaysShowRootCrumb) {
      visibleCrumbs.splice(0, 0, crumbs[0]);
    }
    return visibleCrumbs;
  };

  const addArrowRight = (visibleCrumbs: CrumbInternal[]) => {
    visibleCrumbs.forEach((element) => {
      if (rangeVisibleCrumbs.includes(element.key)) {
        element.arrowRight = arrowRight.ARROW;
      }
    });

    if (minIndex === 1) {
      visibleCrumbs[0].arrowRight = 'arrow';
    }

    return visibleCrumbs;
  };

  const setLabelCrumb = (displayCrumbs: CrumbInternal[]) => {
    const lastCrumb = displayCrumbs[displayCrumbs.length - 1];
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

  const CrumbLabel = (props: { name: string }) => {
    return (
      <span className={getStyle('telia-breadcrumbs__crumb-label', fontColor)}>
        <b>{props.name}</b>
      </span>
    );
  };

  const CrumbPaging = (props: { onPagingEvent: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <>
        <button type="button" className={'telia-breadcrumbs__paging-button'} onClick={props.onPagingEvent}>
          <MoreLowIcon className={getStyle('telia-breadcrumbs__more-icon', iconColor)} />
        </button>
      </>
    );
  };

  const CrumbLink = (crumb: Crumb) => {
    return (
      <>
        <a
          className={getStyle('telia-breadcrumbs__link', fontColor)}
          href={crumb.link}
          target={crumb.target ?? ''}
          title={crumb.title ?? ''}
        >
          {crumb.name}
        </a>
        {crumb.arrowRight === 'arrow' && (
          <ArrowRightIcon className={getStyle('telia-breadcrumbs__arrow-right-icon', iconColor)} />
        )}
      </>
    );
  };

  const CrumbRender = (crumb: Crumb) => {
    let index = 0;
    return (
      <li key={index++} className={'telia-breadcrumbs__crumb'}>
        {crumb.type === crumbType.LEFT && <CrumbPaging onPagingEvent={onPagingLeft} />}

        {crumb.type === crumbType.LABEL && <CrumbLabel name={crumb.name} />}

        {crumb.type === crumbType.RIGHT && <CrumbPaging onPagingEvent={onPagingRight} />}

        {crumb.type === crumbType.LINK && (
          <CrumbLink
            link={crumb.link}
            target={crumb.target}
            title={crumb.title}
            name={crumb.name}
            arrowRight={crumb.arrowRight}
          />
        )}
      </li>
    );
  };

  let displayCrumbs = getVisibleCrumbs();
  displayCrumbs = addPagingCrumbs(displayCrumbs);
  displayCrumbs = addRootCrumb(displayCrumbs);
  displayCrumbs = addArrowRight(displayCrumbs);
  setLabelCrumb(displayCrumbs);

  return (
    <div className={setBackgroundColor('telia-breadcrumbs', props.backgroundColor)}>
      <ul className={'telia-breadcrumbs__list'}>
        {displayCrumbs.map((crumb) => (
          <CrumbRender
            key={crumb.key}
            type={crumb.type}
            name={crumb.name}
            link={crumb.link}
            target={crumb.target}
            title={crumb.title}
            arrowRight={crumb.arrowRight}
          />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
