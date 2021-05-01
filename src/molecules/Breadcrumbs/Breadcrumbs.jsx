import React, { useState } from 'react';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';

const Breadcrumbs = (props) => {
  const alwaysShowRootCrumb = props.alwaysShowRootCrumb ?? true;
  const pageSize = props.pageSize ?? 3;
  const pagingSize = props.pagingSize ?? 1;

  const maxCrumbIndex = props.crumbs.length - 1;
  const [maxIndex, setMaxIndex] = useState(maxCrumbIndex);
  const minIndex = maxIndex - pageSize + 1 + (alwaysShowRootCrumb ? 1 : 0);

  const crumbs = props.crumbs.map((crumb, i) => {
    return {
      key: i,
      name: crumb.name,
      link: crumb.link,
      title: crumb.title,
      target: crumb.target,
      left: false,
      right: false,
    };
  });

  const showLeftPagingTreshold = alwaysShowRootCrumb ? 1 : 0;

  const getVisibleCrumbs = () => {
    return crumbs.filter((c) => {
      let i = c.key;
      return i >= minIndex && i <= maxIndex;
    });
  };

  const addPagingCrumbs = (visibleCrumbs) => {
    if (minIndex > showLeftPagingTreshold && maxCrumbIndex >= pageSize) {
      let crumbButton = crumbs[minIndex - 1];
      crumbButton.left = true;
      visibleCrumbs.splice(0, 0, crumbButton);
    }

    if (maxIndex < maxCrumbIndex && maxCrumbIndex >= pageSize) {
      let crumbButton = crumbs[maxIndex + 1];
      crumbButton.right = true;
      visibleCrumbs.splice(visibleCrumbs.length, 0, crumbButton);
    }

    return visibleCrumbs;
  };

  const addRootCrumb = (visibleCrumbs) => {
    if (minIndex > 0 && alwaysShowRootCrumb) {
      visibleCrumbs.splice(0, 0, crumbs[0]);
    }

    return visibleCrumbs;
  };

  const onPagingLeft = () => {
    setMaxIndex(Math.max(maxIndex - pagingSize, pageSize - 1));
  };

  const onPagingRight = () => {
    setMaxIndex(Math.min(maxIndex + pagingSize, maxCrumbIndex));
  };

  const CrumbLabel = ({ crumb }) => {
    return (
      <span className="breadcrumb__current-page">
        <b>{crumb.name}</b>
      </span>
    );
  };

  const CrumbPaging = ({ onPagingEvent }) => {
    return (
      <button type="button" className="breadcrumb__button" onClick={onPagingEvent}>
        <MoreIcon className="breadcrumb__more-icon" />
      </button>
    );
  };

  const CrumbLink = ({ crumb }) => {
    return (
      <>
        <a className="breadcrumb__link" href={crumb.link} target={crumb.target ?? ''} title={crumb.title ?? ''}>
          {crumb.name}
        </a>
        <ArrowLeftIcon className="breadcrumb__arrow-left-icon" />
      </>
    );
  };

  const CrumbRender = ({ crumb }) => {
    return (
      <li key={crumb.key} className="breadcrumb__element">
        {crumb.left && <CrumbPaging onPagingEvent={onPagingLeft} />}

        {crumb.key === maxCrumbIndex && !crumb.right && <CrumbLabel crumb={crumb} />}

        {crumb.right && <CrumbPaging onPagingEvent={onPagingRight} />}

        {crumb.key !== maxCrumbIndex && !crumb.left && !crumb.right && <CrumbLink crumb={crumb} />}
      </li>
    );
  };

  let displayCrumbs = getVisibleCrumbs();
  displayCrumbs = addPagingCrumbs(displayCrumbs);
  displayCrumbs = addRootCrumb(displayCrumbs);

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        {displayCrumbs.map((crumb) => (
          <CrumbRender crumb={crumb} key={crumb.key} />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
