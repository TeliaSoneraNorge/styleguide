import { result } from 'lodash';
import React, { useState } from 'react';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';

const Breadcrumbs = (props) => {
  const initCrumbSize = 4;
  const initNumberOfCrumbsAfterMinimization = 2;

  let id = 0;
  const crumbs = props.crumbs.map((element) => {
    return { id: id++, name: element.name, link: element.link };
  });

  const [numberOfCrumbsAfterMinimization, setNumberOfCrumbsAfterMinimization] = useState(
    initNumberOfCrumbsAfterMinimization
  );
  const [crumbSize, setCrumbSize] = useState(initCrumbSize);

  let crumb = crumbs.filter((crumb) => crumb.id === 1 || crumb.id >= crumbs.length - numberOfCrumbsAfterMinimization);

  if (crumb.length < crumbs.length && crumbs.length > crumbSize) {
    crumb.splice(1, 0, { id: -1, name: 'minimaziation item', link: 'no link' });
  }

  const handleClick = () => {
    setNumberOfCrumbsAfterMinimization(numberOfCrumbsAfterMinimization + 1);
    setCrumbSize(crumbSize + 1);
    if (crumb.length >= crumbSize) {
      crumb.splice(1, 1);
    }
  };

  const addMinimaziation = (crumb) => {
    return (
      <li key={crumb.id} className="breadcrumb__element">
        <button type="button" className="breadcrumb__button" onClick={handleClick}>
          <MoreIcon className="breadcrumb__more-icon" />
        </button>
        <ArrowLeftIcon className="breadcrumb__arrow-left-icon" />
      </li>
    );
  };

  const addActionLink = (crumb) => {
    return (
      <li key={crumb.id} className="breadcrumb__element">
        <a className="breadcrumb__link" href={crumb.link}>
          {crumb.name}
        </a>
        <ArrowLeftIcon className="breadcrumb__arrow-left-icon" />
      </li>
    );
  };

  const addCurrentPage = (crumb) => {
    return (
      <li key={crumb.id} className="breadcrumb__element">
        <span className="breadcrumb__current-page">
          <b>{crumb.name}</b>
        </span>
      </li>
    );
  };

  let index = 0;
  const length = crumb.length;

  const breadcrumbs = crumb.map((crumb) => {
    index++;
    if (crumb.id === 0) {
      // do nothing - landing page => Telia logo will refresh page
    } else if (crumb.id === -1) {
      return addMinimaziation(crumb);
    } else if (length === index) {
      return addCurrentPage(crumb);
    } else {
      return addActionLink(crumb);
    }
  });

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">{breadcrumbs}</ul>
    </div>
  );
};

export default Breadcrumbs;
