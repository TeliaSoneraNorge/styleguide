import React, { useState } from 'react';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';
import { MoreIcon } from '../../atoms/Icon/icons';

const Breadcrumbs = (props) => {
  // init start values and assign props
  const initCrumbSize = 4;
  const initNumberOfCrumbsAfterMinimization = 2;
  const crumbs = props.crumbs;

  // init react hooks
  const [numberOfCrumbsAfterMinimization, setNumberOfCrumbsAfterMinimization] = useState(
    initNumberOfCrumbsAfterMinimization
  );
  const [crumbSize, setCrumbSize] = useState(initCrumbSize);

  // filter crumb based on init values
  let crumb = crumbs.filter((crumb) => crumb.id === 1 || crumb.id >= crumbs.length - numberOfCrumbsAfterMinimization);

  // add minimaziation item - only used for render minimaziation icon
  if (crumb.length < crumbs.length && crumbs.length > crumbSize) {
    crumb.splice(1, 0, { id: -1, name: 'minimaziation item', link: 'no link' });
  }

  // button click event
  const handleClick = () => {
    setNumberOfCrumbsAfterMinimization(numberOfCrumbsAfterMinimization + 1);
    setCrumbSize(crumbSize + 1);
    if (crumb.length >= crumbSize) {
      crumb.splice(1, 1);
    }
  };

  // add minimaziation element to breadcrumb
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

  // add link element to breadcrumb
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

  // add current page element to breadcrumb
  const addCurrentPage = (crumb) => {
    return (
      <li key={crumb.id} className="breadcrumb__element">
        <span className="breadcrumb__current-page">
          <b>{crumb.name}</b>
        </span>
      </li>
    );
  };

  // init counter and length
  let counter = 0;
  const length = crumb.length;

  // build breadcrumbs from filtered array
  const breadcrumbs = crumb.map((crumb) => {
    counter++;
    if (crumb.id === 0) {
      // do nothing - landing page => Telia logo will refresh page
    } else if (crumb.id === -1) {
      return addMinimaziation(crumb);
    } else if (length === counter) {
      return addCurrentPage(crumb);
    } else {
      return addActionLink(crumb);
    }
  });

  // render breadcrumbs
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">{breadcrumbs}</ul>
    </div>
  );
};

export default Breadcrumbs;
