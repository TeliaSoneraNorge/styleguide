import React from 'react';
import { RenderLine } from './RenderLine';
import { RenderTransparentLayer } from './RenderTransparentLayer';
import { Icon } from '../../atoms/Icon';

export const RenderArrow = (props: any) => {
  const { onPaging, iconName, isComplete } = props;

  const modifier = iconName.includes('left') ? 'left' : 'right';

  return (
    <li className={'telia-step-indicator-paging__arrow telia-step-indicator-paging__arrow--' + modifier}>
      <RenderLine isComplete={isComplete} className={'telia-step-indicator-paging__line--' + modifier} />

      <RenderTransparentLayer modifier={modifier} />

      <button
        type="button"
        onClick={onPaging}
        className={'telia-step-indicator-paging__arrow__button telia-step-indicator-paging__arrow__button--' + modifier}
      >
        <Icon icon={iconName} />
      </button>
    </li>
  );
};
