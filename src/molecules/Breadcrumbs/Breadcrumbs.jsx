import React, { useState } from 'react';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';

const Breadcrumbs = (props) => {
  const alwaysShowRootCrumb = props.alwaysShowRootCrumb ?? true;
  const pageSize = props.pageSize ?? 3;
  const pagingSize = props.pagingSize ?? 1;

  const lastCrumbIndex = props.crumbs.length - 1;

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

  const [lastVisibleIndex, setLastVisibleIndex] = useState(lastCrumbIndex);
  let firstVisibleIndex = lastVisibleIndex - pageSize + 1 + (alwaysShowRootCrumb ? 1 : 0);

  const getVisibleCrumbs = () => {
    return crumbs.filter((c) => {
      let i = c.key;

      if (i === 0 && alwaysShowRootCrumb) {
        return true;
      }

      if (i === firstVisibleIndex - 1) {
        c.left = true;
        return true;
      }

      if (i === lastVisibleIndex + 1 && lastVisibleIndex < lastCrumbIndex) {
        c.right = true;
        return true;
      }

      if (firstVisibleIndex <= i && i <= lastVisibleIndex) {
        return true;
      }

      return false;
    });
  };

  const onPagingLeft = () => {
    setLastVisibleIndex(Math.max(lastVisibleIndex - pagingSize, pageSize - 1));
  };

  const onPagingRight = () => {
    setLastVisibleIndex(Math.min(lastVisibleIndex + pagingSize, lastCrumbIndex));
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
        {crumb.key === lastCrumbIndex && !crumb.right && <CrumbLabel crumb={crumb} />}

        {crumb.left && <CrumbPaging onPagingEvent={onPagingLeft} />}

        {crumb.right && <CrumbPaging onPagingEvent={onPagingRight} />}
        {crumb.key !== lastCrumbIndex && !crumb.left && !crumb.right && <CrumbLink crumb={crumb} />}
      </li>
    );
  };

  let list = getVisibleCrumbs();
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        {list.map((crumb) => (
          <CrumbRender crumb={crumb} key={crumb.key} />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
