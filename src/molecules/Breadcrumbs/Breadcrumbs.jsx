import React, { useState } from 'react';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';

const Breadcrumbs = (props) => {
  const initfirstPos = props.crumbs.length - 2;
  const initlastPos = props.crumbs.length - 1;
  const [first, setFirstPosition] = useState(initfirstPos);
  const [last, setLastPosition] = useState(initlastPos);

  let key = 0;
  const crumbs = props.crumbs.map((crumb) => {
    return { key: key++, name: crumb.name, link: crumb.link };
  });

  const handleScrollLeft = () => {
    if (first > 0) {
      setFirstPosition(first - 1);
      setLastPosition(last - 1);
    }
  };

  const handleScrollRight = () => {
    if (last < crumbs.length - 1) {
      setFirstPosition(first + 1);
      setLastPosition(last + 1);
    }
  };

  const renderMinification = (key, showArrow, scrollDirection) => {
    return (
      <li key={key} className="breadcrumb__element">
        <button type="button" className="breadcrumb__button" onClick={scrollDirection}>
          <MoreIcon className="breadcrumb__more-icon" />
        </button>
        {showArrow && <ArrowLeftIcon className="breadcrumb__arrow-left-icon" />}
      </li>
    );
  };

  const renderLink = (crumb) => {
    return (
      <li key={crumb.key} className="breadcrumb__element">
        <a className="breadcrumb__link" href={crumb.link}>
          {crumb.name}
        </a>
        <ArrowLeftIcon className="breadcrumb__arrow-left-icon" />
      </li>
    );
  };

  const renderCurrentPage = (crumb) => {
    return (
      <li key={crumb.key} className="breadcrumb__element">
        <span className="breadcrumb__current-page">
          <b>{crumb.name}</b>
        </span>
      </li>
    );
  };

  let breadcrumbs = crumbs.map((crumb) => {
    if (crumb.key === 0) {
      // do nothing
    } else if (crumbs.length === 2 && crumb.key === 1) {
      return renderCurrentPage(crumb);
    } else {
      if (crumb.key === first) {
        return renderLink(crumb);
      }
      if (crumb.key === last && last === crumbs.length - 1) {
        return renderCurrentPage(crumb);
      }
      if (crumb.key === last && last < crumbs.length - 1) {
        return renderLink(crumb);
      }
      if (crumb.key === 1) {
        return renderLink(crumb);
      }
    }
  });

  if (first > 2) {
    breadcrumbs.splice(2, 0, renderMinification(-1, true, handleScrollLeft));
  }

  if (last < crumbs.length - 1) {
    breadcrumbs.splice(last + 2, 0, renderMinification(-10, false, handleScrollRight));
  }

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">{breadcrumbs}</ul>
    </div>
  );
};

export default Breadcrumbs;
