import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ArrowLeftIcon } from '../../atoms/Icon/icons';

const Breadcrumbs = (props) => {
  const crumbs = props.crumbs;
  let crumb;

  crumb = crumbs.map((crumb) => {
    if (crumb.id + 1 === crumbs.length) {
      return (
        <li key={crumb.id.toString()} className="breadcrumb__element">
          <span className="breadcrumb__box">{crumb.name}</span>
        </li>
      );
    } else if (crumb.id > 0 && crumb.id + 2 < crumbs.length) {
      if (crumb.id > 1 && crumb.id + 2 < crumbs.length) {
        // do nothing
      } else {
        return (
          <li key={crumb.id.toString()} className="breadcrumb__element">
            <span className="breadcrumb__box">{'...'}</span>
            <span>
              <ArrowLeftIcon title={'Arrow'} className="breadcrumb__icon" />
            </span>
          </li>
        );
      }
    } else {
      return (
        <li key={crumb.id.toString()} className="breadcrumb__element">
          <a href={crumb.link} className="breadcrumb__call-to-action">
            <span className="breadcrumb__box">{crumb.name}</span>
          </a>
          <span>
            <ArrowLeftIcon title={'Arrow'} className="breadcrumb__icon" />
          </span>
        </li>
      );
    }
  });

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">{crumb}</ul>
    </div>
  );
};

export default Breadcrumbs;
