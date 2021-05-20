import classNames from 'classnames';
import React, { useState } from 'react';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';
import classnames from 'classnames';

const crumbType = {
  LINK: 'link',
  LEFT: 'left',
  RIGHT: 'right',
  LABEL: 'label',
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
    };
  });

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
      <span className={'telia-breadcrumbs__crumb-label'}>
        <b>{crumb.name}</b>
      </span>
    );
  };

  const CrumbPaging = ({ onPagingEvent, showArrowLeftIcon }) => {
    return (
      <>
        <button type="button" className="telia-breadcrumbs__paging-button" onClick={onPagingEvent}>
          <MoreIcon
            className={classnames('telia-breadcrumbs__more-icon', {
              'telia-breadcrumbs__more-icon--white': props.backgroundColor === 'core-purple',
            })}
          />
        </button>
        {showArrowLeftIcon && (
          <ArrowLeftIcon
            className={classnames('telia-breadcrumbs__arrow-left-icon', {
              'telia-breadcrumbs__arrow-left-icon--white': props.backgroundColor === 'core-purple',
            })}
          />
        )}
      </>
    );
  };

  const CrumbLink = ({ crumb }) => {
    return (
      <>
        <a
          className={'telia-breadcrumbs__link'}
          href={crumb.link}
          target={crumb.target ?? ''}
          title={crumb.title ?? ''}
        >
          {crumb.name}
        </a>
        <ArrowLeftIcon
          className={classnames('telia-breadcrumbs__arrow-left-icon', {
            'telia-breadcrumbs__arrow-left-icon--white': props.backgroundColor === 'core-purple',
          })}
        />
      </>
    );
  };

  const CrumbRender = ({ crumb }) => {
    return (
      <li key={crumb.key} className={'telia-breadcrumbs__crumb'}>
        {crumb.type === crumbType.LEFT && <CrumbPaging onPagingEvent={onPagingLeft} showArrowLeftIcon={true} />}

        {crumb.type === crumbType.LABEL && <CrumbLabel crumb={crumb} />}

        {crumb.type === crumbType.RIGHT && <CrumbPaging onPagingEvent={onPagingRight} />}

        {crumb.type === crumbType.LINK && <CrumbLink crumb={crumb} />}
      </li>
    );
  };

  let displayCrumbs = getVisibleCrumbs();
  displayCrumbs = addPagingCrumbs(displayCrumbs);
  displayCrumbs = addRootCrumb(displayCrumbs);
  setLabelCrumb(displayCrumbs);

  return (
    <div
      className={classNames('telia-breadcrumbs', {
        'telia-breadcrumbs--purple': props.backgroundColor === 'core-purple',
        'telia-breadcrumbs--gray': props.backgroundColor === 'gray',
      })}
    >
      <ul
        className={classNames('telia-breadcrumbs__list', {
          'telia-breadcrumbs__list--white': props.backgroundColor === 'core-purple',
        })}
      >
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
