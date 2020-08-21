import React from 'react';
import { FocusBox } from '../../index';

export default {
  title: 'Component library/Molecules/FocusBox',
  component: FocusBox,
};

export const Default = () => (
  <FocusBox>
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
    <button className="button button--margin-bottom">Click me</button>
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </FocusBox>
);

export const WithoutContent = () => <FocusBox />;