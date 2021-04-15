import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms/Icon';

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * Should be placed in a medium or large container. Never small.
 * Should always use white breadcrumbs on grey background and grey breadcrumbs on white background.
 **/
export default class Breadcrumbs extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <ul className="">
          Hjem
          <span className="">
            <Icon Icon="arrow-down" />
          </span>
          Sub page
        </ul>
      </div>
    );
  }
}
