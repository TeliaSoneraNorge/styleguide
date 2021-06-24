import React, { useState } from 'react';
import { ArrowRightIcon } from '../../atoms/Icon/icons';
import { MoreLowIcon } from '../../atoms/Icon/icons';

export interface Crumb {
  name: string;
  link: string;
  target?: string;
  title?: string;
  type?: string;
}

export type BreadcrumbsProps = {
  /**
   * Array of Breadcrumbs to be shown
   */
  crumbs?: Crumb[];
  /**
   * Set flag to hide or show root crumb
   */
  alwaysShowRootCrumb?: boolean | undefined;
  /**
   * Set number of pages to show
   */
  pageSize?: number | undefined;
  /**
   * Set paging size
   */
  pagingSize?: number | undefined;
  /**
   * Set background color for breadcrumbs
   */
  backgroundColor?: string | undefined;
  /**
   * Set font color for breadcrumbs
   */
  fontColor?: string | undefined;
  /**
   * Set icon color for breadcrumbs
   */
  iconColor?: string | undefined;
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
      fontColor: props.fontColor,
      iconColor: props.iconColor,
    };
  });

  const getStyle = (style: string, color: string) => {
    if (color) {
      return (style += ' ' + style + '--' + color);
    }
    return style;
  };

  const rangeVisibleCrumbs = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(null)
      .map((_, idx) => start + idx);
  };
  const result = rangeVisibleCrumbs(minIndex, maxIndex - 1);

  const getVisibleCrumbs = () => {
    return crumbs.filter((c) => {
      const i = c.key;
      return i >= minIndex && i <= maxIndex;
    });
  };

  const addPagingCrumbs = (visibleCrumbs: any[]) => {
    const addPagingCrumb = (
      index: number,
      crumb: {
        key: number;
        name: string;
        link: string;
        title?: string;
        target?: string;
        type: string;
        arrowRight?: string;
        fontColor?: string;
        iconColor?: string;
      },
      type: string
    ) => {
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

  const addRootCrumb = (visibleCrumbs: any[]) => {
    if (minIndex > 0 && alwaysShowRootCrumb) {
      visibleCrumbs.splice(0, 0, crumbs[0]);
    }
    return visibleCrumbs;
  };

  const addArrowRight = (visibleCrumbs: any[]) => {
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

  const setLabelCrumb = (displayCrumbs: Crumb[]) => {
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

  const CrumbLabel = (props: { fontColor: string; name: string | undefined }) => {
    return (
      <span className={getStyle('telia-breadcrumbs__crumb-label', props.fontColor)}>
        <b>{props.name}</b>
      </span>
    );
  };

  const CrumbPaging = (props: {
    onPagingEvent: React.MouseEventHandler<HTMLButtonElement> | undefined;
    iconColor: string;
  }) => {
    return (
      <>
        <button type="button" className={'telia-breadcrumbs__paging-button'} onClick={props.onPagingEvent}>
          <MoreLowIcon className={getStyle('telia-breadcrumbs__more-icon', props.iconColor)} />
        </button>
      </>
    );
  };

  const CrumbLink = (props: {
    fontColor: string;
    link: string;
    target: any;
    title: any;
    name: string;
    arrowRight: string;
    iconColor: string;
  }) => {
    return (
      <>
        <a
          className={getStyle('telia-breadcrumbs__link', props.fontColor)}
          href={props.link}
          target={props.target ?? ''}
          title={props.title ?? ''}
        >
          {props.name}
        </a>
        {props.arrowRight === 'arrow' && (
          <ArrowRightIcon className={getStyle('telia-breadcrumbs__arrow-right-icon', props.iconColor)} />
        )}
      </>
    );
  };

  const CrumbRender = (props: {
    key: number;
    type: string;
    iconColor: string;
    fontColor: string;
    name: string;
    link: string;
    target: any;
    title: any;
    arrowRight: string;
  }) => {
    return (
      <li key={props.key} className={'telia-breadcrumbs__crumb'}>
        {props.type === crumbType.LEFT && <CrumbPaging onPagingEvent={onPagingLeft} iconColor={props.iconColor} />}
        {props.type === crumbType.LABEL && <CrumbLabel fontColor={props.fontColor} name={props.name} />}
        {props.type === crumbType.RIGHT && <CrumbPaging onPagingEvent={onPagingRight} iconColor={props.iconColor} />}
        {props.type === crumbType.LINK && (
          <CrumbLink
            fontColor={props.fontColor}
            link={props.link}
            target={props.target}
            title={props.title}
            name={props.name}
            arrowRight={props.arrowRight}
            iconColor={props.iconColor}
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
    <div className={getStyle('telia-breadcrumbs', props.backgroundColor)}>
      <ul className={'telia-breadcrumbs__list'}>
        {displayCrumbs.map((crumb) => (
          <CrumbRender
            key={crumb.key}
            type={crumb.type}
            iconColor={crumb.iconColor}
            fontColor={crumb.fontColor}
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

Breadcrumbs.defaultProps = {
  crumbs: [],
};

export default Breadcrumbs;
