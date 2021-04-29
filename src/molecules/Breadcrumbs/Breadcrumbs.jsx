import React, { useState } from 'react';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';

const Breadcrumbs = (props) => {
  const firstElementCrumb = 0;
  const lastElementCrumb = props.crumbs.length - 1;
  const initFirst = props.crumbs.length - 2;
  const [first, setFirst] = useState(initFirst);
  const [last, setLast] = useState(lastElementCrumb);

  let key = 0;
  const crumbs = props.crumbs.map((crumb) => {
    return { key: key++, name: crumb.name, link: crumb.link };
  });

  const handleScrollLeft = () => {
    if (first > firstElementCrumb) {
      setFirst(first - 1);
      setLast(last - 1);
    }
  };

  const handleScrollRight = () => {
    if (last < lastElementCrumb) {
      setFirst(first + 1);
      setLast(last + 1);
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
      if (crumb.key === last && last === lastElementCrumb) {
        return renderCurrentPage(crumb);
      }
      if (crumb.key === last && last < lastElementCrumb) {
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

  if (last < lastElementCrumb) {
    breadcrumbs.splice(last + 2, 0, renderMinification(-10, false, handleScrollRight));
  }

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">{breadcrumbs}</ul>
    </div>
  );
};

export default Breadcrumbs;
