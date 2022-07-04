import React from 'react';
import { Line } from './_Line';
import { RenderTransparentLayer } from './RenderTransparentLayer';
import { RenderIcon } from './RenderIcon';

export const RenderArrow = (props: any) => {
  const { onPaging, iconName, isComplete } = props;

  const modifier = iconName.includes('left') ? 'left' : 'right';

  return (
    <li className={'telia-step-indicator-paging__arrow telia-step-indicator-paging__arrow--' + modifier}>
      <Line isComplete={isComplete} className={'telia-step-indicator-paging__line--' + modifier} />

      <RenderTransparentLayer modifier={modifier} />

      <button
        type="button"
        onClick={onPaging}
        className={'telia-step-indicator-paging__arrow__button telia-step-indicator-paging__arrow__button--' + modifier}
      >
        <RenderIcon iconName={iconName} />
      </button>
    </li>
  );
};
